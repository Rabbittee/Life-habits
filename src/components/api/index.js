import { imgurImageUrl, imgurAlbumUrl } from 'constant';

export default function imgurApi(query) {
  return {
    getImgApi: () => `${imgurImageUrl}${query}`,
    getAlbumApi: () => `${imgurAlbumUrl}${query}`,
  };
}
