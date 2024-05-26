import base from '../assets/base.svg';
import React from 'react';
import Input from '../components/common/input';
import Highlighter from 'react-highlight-words';
import style from './index.module.css';
import { cx } from '../helpers';
import Button from '../components/common/button';

import * as htmlToImage from 'html-to-image';

const MAX_WIDTH = 600;
function IndexPage() {
  const mainContentRef = React.useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = React.useState<number>(0);
  React.useEffect(() => {
    if (mainContentRef.current) {
      setContentWidth(mainContentRef.current.offsetWidth);
    }
  }, [mainContentRef.current]);
  // Reset width and height on resize
  React.useEffect(() => {
    const onResize = () => {
      setContentWidth(0);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  const actualWidth = 1080;

  const scaledWidth = (width: number) => (contentWidth / actualWidth) * width;

  const fontSize = scaledWidth(48);
  const fontSizeSource = scaledWidth(24);
  const scale = 2;

  const [text, setText] = React.useState<string>('');
  const [category, setCategory] = React.useState<string>('');
  const [highlight, setHighlight] = React.useState<string>('');
  const [backgroundUrl, setBackgroundUrl] = React.useState<string>('');
  const [source, setSource] = React.useState<string>('');
  const handleSaveImage = () => {
    console.log('save image', mainContentRef.current);
    if (!mainContentRef.current) {
      return;
    }

    htmlToImage
      .toPng(mainContentRef.current, {
        height: mainContentRef.current.offsetHeight * scale,
        width: mainContentRef.current.offsetWidth * scale,
        style: {
          transform: 'scale(' + scale + ')',
          transformOrigin: 'top left',
          width: mainContentRef.current.offsetHeight + 'px',
          height: mainContentRef.current.offsetWidth + 'px',
        },
      })
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.download = `template-${Date.now()}.png`;
        link.href = dataUrl;
        link.click();
      });
  };

  return (
    <div
      style={{
        maxWidth: MAX_WIDTH,
        padding: '20px 0px',
      }}
      className='mx-auto'
    >
      <div
        ref={mainContentRef}
        style={{
          maxWidth: MAX_WIDTH,
          background: `url(${backgroundUrl}) no-repeat center center`,
          backgroundSize: 'cover',
        }}
        className='relative w-full text-white leading-[210%]'
      >
        <div
          style={{
            fontSize: fontSizeSource,
            position: 'absolute',
            top: '45%',
            right: scaledWidth(24),
            width: 0,
            transform: 'rotate(-90deg)',
            whiteSpace: 'nowrap',
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Sumber: {source}
        </div>
        <div
          style={{
            fontSize,
            position: 'absolute',
            top: scaledWidth(60),
            right: scaledWidth(60),
            opacity: 0.5,
            textShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
            fontWeight: 'semibold',
          }}
        >
          {category}
        </div>
        <div
          style={{
            fontSize,
            position: 'absolute',
            top: scaledWidth(900),
            left: scaledWidth(60),
            right: scaledWidth(60),
          }}
        >
          <Highlighter
            className='font-bold'
            highlightClassName={cx(style['highlighted'])}
            searchWords={[highlight]}
            autoEscape={true}
            textToHighlight={text}
          />
        </div>
        <img src={base} alt='tmp' className='w-full' />
      </div>

      <div className='mt-8'>
        <div>
          <label>Judul</label>
          <Input
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Highlight</label>

          <Input
            onChange={(e) => {
              setHighlight(e.target.value);
            }}
          />
        </div>
        <div>
          <label>sumber</label>

          <Input
            onChange={(e) => {
              setSource(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Kategori</label>
          <Input
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
        </div>
        <div>
          <label className='block'>Background</label>
          <input
            type='file'
            onChange={(e) => {
              const file = e.target?.files?.[0];
              if (!file) {
                return;
              }

              const url = URL.createObjectURL(file);
              setBackgroundUrl(url);
            }}
          />
        </div>
        <Button onClick={handleSaveImage} className='mt-6 w-full'>
          Save Image
        </Button>
      </div>
    </div>
  );
}

export default IndexPage;
