const express = require('express');
const app = express();
const { Canvas } = require('canvas-constructor');
const canvas = require('canvas');

app.get('/awkwardmokney/text=:feed', async (req, res) => {

    const img = await canvas.loadImage('./video_image-I-alhMTIj.png')

    let image = new Canvas(1920, 1613)
    .printImage(img, 0, 0, 1920, 1613)
    .setTextFont('100px Arial')
    .printText(req.params.feed, 90, 90)
    .toBuffer();

    res.set({'Content-Type': 'image/png'})
    res.send(image)

});

