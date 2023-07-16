//  @ts-nocheck
import { Quill } from 'react-quill';
//----- 1. CLIPBOARD------------------------------------------------------------------------
const QuillClipboard = Quill.import('modules/clipboard');

export class Clipboard extends QuillClipboard {
  getMetaTagElements = (stringContent: string) => {
    const el = document.createElement('div');
    el.innerHTML = stringContent;
    return el.getElementsByTagName('meta');
  };

  async onPaste(e) {
    const clipboardData = e.clipboardData || window.clipboardData;
    const pastedData = await clipboardData.getData('Text');

    const urlMatches = pastedData.match(/\b(http|https)?:\/\/\S+/gi) || [];

    if (urlMatches.length > 0) {
      e.preventDefault();
      urlMatches.forEach((link) => {
        axios
          .get(link)
          .then((payload) => {
            // let title, image, url, description;
            let title, image, url;
            for (let node of this.getMetaTagElements(payload)) {
              if (node.getAttribute('property') === 'og:title') {
                title = node.getAttribute('content');
              }
              if (node.getAttribute('property') === 'og:image') {
                image = node.getAttribute('content');
              }
              if (node.getAttribute('property') === 'og:url') {
                url = node.getAttribute('content');
              }
              // if (node.getAttribute("property") === "og:description") {
              //     description = node.getAttribute("content");
              // }
            }

            const rendered = `<a href=${url} target="_blank"><div><img src=${image} alt=${title} width="20%"/><span>${title}</span></div></a>`;

            let range = this.quill.getSelection();
            let position = range ? range.index : 0;
            this.quill.pasteHTML(position, rendered, 'silent');
            this.quill.setSelection(position + rendered.length);
          })
          .catch((error) => console.error(error));
      });
    } else {
      //console.log('when to use this') Normally, paste it elsewhere and then copy it.
      super.onPaste(e);
    }
  }
}

// Quill.register('modules/clipboard', Clipboard, true);
//----- 1. CLIPBOARD------------------------------------------------------------------------

//----- 2. IMAGE------------------------------------------------------------------------

const BlockEmbed = Quill.import('blots/block/embed');

export class ImageBlot extends BlockEmbed {
  static create(value) {
    const imgTag = super.create();
    imgTag.setAttribute('src', value.src);
    imgTag.setAttribute('alt', value.alt);
    imgTag.setAttribute('width', '75%');
    imgTag.classList.add('imageUpload');

    return imgTag;
  }

  static value(node) {
    return { src: node.getAttribute('src'), alt: node.getAttribute('alt') };
  }
}
// ImageBlot.blotName = 'image';
// ImageBlot.tagName = 'img';
// Quill.register(ImageBlot);
//----- 2. IMAGE------------------------------------------------------------------------

//----- 3. VIDEO------------------------------------------------------------------------

export class VideoBlot extends BlockEmbed {
  static create(value) {
    if (value && value.src) {
      const videoTag = super.create();
      videoTag.setAttribute('src', value.src);
      videoTag.setAttribute('title', value.title);
      videoTag.setAttribute('width', '80%');
      videoTag.setAttribute('controls', '');

      return videoTag;
    } else {
      const iframeTag = document.createElement('iframe');
      iframeTag.setAttribute('src', value);
      iframeTag.setAttribute('frameborder', '0');
      iframeTag.setAttribute('allowfullscreen', true);
      iframeTag.setAttribute('width', '100%');
      return iframeTag;
    }
  }

  static value(node) {
    if (node.getAttribute('title')) {
      return { src: node.getAttribute('src'), alt: node.getAttribute('title') };
    } else {
      return node.getAttribute('src');
    }
    // return { src: node.getAttribute('src'), alt: node.getAttribute('title') };
  }
}
// VideoBlot.blotName = 'video';
// VideoBlot.tagName = 'video';
// Quill.register(VideoBlot);

//----- 3. VIDEO------------------------------------------------------------------------

//----- 4. FILE------------------------------------------------------------------------

export class FileBlot extends BlockEmbed {
  static create(value) {
    const prefixTag = document.createElement('span');
    prefixTag.innerText = 'Attachments - ';

    const bTag = document.createElement('b');
    // The file name appears next to the text of the attachment using the b tag.
    bTag.innerText = value;

    const linkTag = document.createElement('a');
    linkTag.setAttribute('href', value);
    linkTag.setAttribute('target', '_blank');
    linkTag.setAttribute('className', 'file-link-inner-post');
    linkTag.appendChild(bTag);
    //linkTag Comes out like this<a href="btn_editPic@3x.png" target="_blank" classname="file-link-inner-post"><b>btn_editPic@3x.png</b></a>

    const node = super.create();
    node.appendChild(prefixTag);
    node.appendChild(linkTag);

    return node;
  }

  static value(node) {
    const linkTag = node.querySelector('a');
    return linkTag.getAttribute('href');
  }
}
// FileBlot.blotName = 'file';
// FileBlot.tagName = 'p';
// FileBlot.className = 'file-inner-post';
// Quill.register(FileBlot);

//----- 4. FILE------------------------------------------------------------------------

//----- 5. POLL------------------------------------------------------------------------

export class PollBlot extends BlockEmbed {
  static create(value) {
    const prefixTag = document.createElement('span');
    prefixTag.innerText = 'vote - ';

    const bTag = document.createElement('b');
    bTag.innerText = value.title;

    const node = super.create();
    node.setAttribute('id', value.id);
    node.appendChild(prefixTag);
    node.appendChild(bTag);

    return node;
  }

  static value(node) {
    const id = node.getAttribute('id');
    const bTag = node.querySelector('b');
    const title = bTag.innerText;
    return { id, title };
  }
}

// PollBlot.blotName = 'poll';
// PollBlot.tagName = 'p';
// PollBlot.className = 'poll-inner-post';
// Quill.register(PollBlot);

//----- 5. POLL------------------------------------------------------------------------
