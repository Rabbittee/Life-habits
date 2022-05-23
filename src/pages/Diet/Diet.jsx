import { useState } from 'react';
import axios from 'axios';
import imgurApi from 'components/api';
import { CLIENT_ID } from 'components/utils/Constants';
import { ImgLabel } from './components';
import { AddImage } from './components/AddImage';

function Diet() {
  const albumId = 'ABDhZzE';
  const [imgLinks, setImgLinks] = useState([]);

  const apiOptions = (id, method) => {
    const url = imgurApi(id)[method]();
    const options = {
      headers: {
        Authorization: `Client-ID ${CLIENT_ID}`,
      },
    };
    return { url, options };
  };

  async function getAlbum(id) {
    try {
      const { url, options } = apiOptions(id, 'getAlbumApi');
      const res = await axios.get(url, options);
      const images = res.data.data.images;
      const links = images.map(item => item.link);
      setImgLinks(links);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>HomePage is working</h1>
      <ImgLabel getImg={() => getAlbum(albumId)} imgLinks={imgLinks} />
      <AddImage />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default Diet;
