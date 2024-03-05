/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');
const app = express();
const path = require('path');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define the directory where your HTML files (views) are located
app.set('views', path.join(__dirname, 'views'));

// Optionally, you can define a static files directory (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// App
app.get('/', (req, res) => {
	//res.send('Hello remote world!\n');
	res.render("index");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);