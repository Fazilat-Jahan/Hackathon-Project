import { createClient } from '@sanity/client';

const client = createClient({
    projectId: 'fg287be1',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2025-01-13',
    token: 'skAOlKaC0Ime4NW0raJLH9upZ0YyOjFSbfbgBAxPbRqGyZY87VlYoRgLe6H0Rhuo3sL8AdlpUUpAHCPPDoPOE6Zs6M03O5znXXUhrZQv5CkCOjYD3DxZjp5u28ZBxKL1DQjeN8BUFxngYeLLOjZ8WbAwxaTr5bXy4RZO7Gm30hqGrjkj5DDr',
});

async function uploadImageToSanity(imageUrl) {
    try {
        console.log(`Uploading image: ${imageUrl}`);

        const response = await fetch(imageUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch image: ${imageUrl}`);
        }

        const buffer = await response.arrayBuffer();
        const bufferImage = Buffer.from(buffer);

        const asset = await client.assets.upload('image', bufferImage, {
            filename: imageUrl.split('/').pop(),
        });

        console.log(`Image uploaded successfully: ${asset._id}`);
        return asset._id;
    } catch (error) {
        console.error('Failed to upload image:', imageUrl, error);
        return null;
    }
}

async function uploadProduct(product) {
    try {
        const imageId = await uploadImageToSanity(product.imageUrl);

        if (imageId) {
            const document = {
                _type: 'products',
                name: product.name,
                description: product.description,
                price: product.price,
                image: {
                    _type: 'image',
                    asset: {
                        _ref: imageId,
                    },
                },
                category: product.category,
                discountPercent: product.discountPercent,
                isNew: product.isNew,
            };

            const createdProduct = await client.create(document);
            console.log(`Product ${product.name} uploaded successfully:`, createdProduct);
        } else {
            console.log(`Product ${product.name} skipped due to image upload failure.`);
        }
    } catch (error) {
        console.error('Error uploading product:', error);
    }
}

async function importProducts() {
    try {
        const response = await fetch('https://template1-neon-nu.vercel.app/api/products');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const products = await response.json();

        for (const product of products) {
            await uploadProduct(product);
        }
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

importProducts();