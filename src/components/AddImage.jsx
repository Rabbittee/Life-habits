import axios from 'axios';
import { useState } from 'react';

function AddImage() {
  let [link, setLink] = useState('');
  let [files, setFiles] = useState(null);

  function handleFileChange(e) {
    const { files } = e.target;
    setFiles(files[0]);

    if (files.length === 0) {
      setLink('');
    } else {
      const imageURL = window.URL.createObjectURL(files[0]);
      setLink(imageURL);
    }
  }

  async function submitImg() {
    console.log('files', files, 'link', link);
    let form = new FormData();
    form.append('image', files);
    form.append('album', 'PZijGmD');

    await axios({
      method: 'POST',
      url: 'https://api.imgur.com/3/image',
      headers: {
        Authorization: `Bearer access token`,
      },
      data: form,
      mimeType: 'multipart/form-data',
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <>
      <h1>add image component is here</h1>
      <input type="file" name="image" id="image" onChange={handleFileChange} />
      {link ? <img src={`${link}`} alt="alt" width="200" height="200" /> : <p>Img Link is empty</p>}
      <div>
        <button onClick={submitImg}>upload img</button>
      </div>
    </>
  );
}

export default AddImage;
