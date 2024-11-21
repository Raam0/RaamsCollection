const DataTable = require('datatables.net-dt');
const express = require('express');
const path = require('path');
const fs = require('fs');
const { BlobServiceClient } = require('@azure/storage-blob');
const app = express();
const port = process.env.PORT || 3000;

const accountName = 'raamscollectionstorage'; 
const sasToken = 'sv=2022-11-02&ss=b&srt=sco&sp=rwdlaciytfx&se=2030-11-21T07:20:09Z&st=2024-11-20T23:20:09Z&spr=https&sig=rE1WxPV%2FS1NCSRuoFJkN3biAF%2F9L%2FZL%2F51tnH4zSa2g%3D'; 
const containerName1 = 'seattle';
const containerName2 = 'virginia';
const containerName3 = 'japan';

// CDN endpoint 
const cdnEndpoint = 'https://seattleimgdelivery-eeh5ddhzevhzg2de.z01.azurefd.net';

async function listBlobUrls1() {
    const blobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net?${sasToken}`);
    const containerClient = blobServiceClient.getContainerClient(containerName1);

    const blobUrls = [];
    for await (const blob of containerClient.listBlobsFlat()) {
        const url = `${cdnEndpoint}/${containerName1}/${blob.name}`;
        blobUrls.push(url);
    }
    return blobUrls;
}

async function listBlobUrls2() {
    const blobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net?${sasToken}`);
    const containerClient = blobServiceClient.getContainerClient(containerName2);

    const blobUrls = [];
    for await (const blob of containerClient.listBlobsFlat()) {
        const url = `${cdnEndpoint}/${containerName2}/${blob.name}`;
        blobUrls.push(url);
    }
    return blobUrls;
}

async function listBlobUrls3() {
    const blobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net?${sasToken}`);
    const containerClient = blobServiceClient.getContainerClient(containerName3);

    const blobUrls = [];
    for await (const blob of containerClient.listBlobsFlat()) {
        const url = `${cdnEndpoint}/${containerName3}/${blob.name}`;
        blobUrls.push(url);
    }
    return blobUrls;
}

app.get('/image-urls', async (req, res) => {
    try {
        const blobUrls = await listBlobUrls1();
        res.json(blobUrls);
    } catch (error) {
        res.status(500).send('Error retrieving images');
    }
});

app.get('/image-urls2', async (req, res) => {
    try {
        const blobUrls = await listBlobUrls2();
        res.json(blobUrls);
    } catch (error) {
        res.status(500).send('Error retrieving images');
    }
});

app.get('/image-urls3', async (req, res) => {
    try {
        const blobUrls = await listBlobUrls3();
        res.json(blobUrls);
    } catch (error) {
        res.status(500).send('Error retrieving images');
    }
});

// Middleware to disable strict MIME type checking
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    next();
});

// Define a route for the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
