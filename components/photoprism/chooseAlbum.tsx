import { getAlbums } from "@/scripts/photoprism"
import {useState } from 'react';



export default function chooseAlbum() {
    const [albums,setAlbums] = useState();
    const [choice,setChoice] = useState();
    const [name,setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [albumsFetched, setAlbumsFetched] = useState(false);

    async function fetchAlbums(){
        const albumsL = await getAlbums();
        setAlbums(albumsL);
        setAlbumsFetched(true);
    }

    async function createAlbum(){

    }

    return (

    )

}