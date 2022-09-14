import * as React from 'react';

export default function Cards({ title, icon }) {
  return (
    <div
      style={{
        width: '230px',
        height: '270px',
        background: 'black',
      }}
    >
      <h1
        style={{
          color: 'lightblue',
          textAlign: 'center',
          paddingTop: '20px',
          fontSize: '20px',
        }}
      >
        {title}
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'centter',
          marginTop: '15px',
        }}
      >
        {icon}
      </div>
      <h2
        style={{
          color: 'white',
          textAlign: 'center',
          paddingTop: '18px',
          fontSize: '16px',
        }}
      >
        Lorem Ipsum
      </h2>
      <p
        style={{
          color: 'white',
          textAlign: 'center',
          paddingTop: '6px',
          fontSize: '13px',
        }}
      >
        Lorem Ipsum hacks
      </p>
      <div
        style={{
          margin: '13px auto 0',
          background: 'white',
          width: '102px',
          height: '1px',
        }}
      ></div>
      <p
        style={{
          color: 'white',
          textAlign: 'center',
          paddingTop: '16px',
          fontSize: '13px',
        }}
      >
        Lorem Ipsum hacks
      </p>
      <p
        style={{
          color: 'white',
          textAlign: 'center',
          paddingTop: '6px',
          fontSize: '13px',
        }}
      >
        Lorem Ipsum hacks
      </p>
      <p
        style={{
          color: 'white',
          textAlign: 'center',
          paddingTop: '6px',
          fontSize: '13px',
        }}
      >
        Lorem Ipsum hacks
      </p>
    </div>
  );
}
