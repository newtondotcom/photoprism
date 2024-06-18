import Photoprism from "./photoprism";

// init instance
const photoprism = new Photoprism("https://demo.photoprism.app", "demo", "");

// get albums
const albums = await photoprism.getAlbums();

// create album
const album = await photoprism.createAlbum({ Title: "test" });

// upload file in album
const uploadFile = createReadStream(__dirname + "/sample.png");
let upload = await photoprism.uploadPhotoToAlbum([album.UID!], uploadFile);
