import React from 'react'
import HTMLFlipBook from 'react-pageflip';

const Page = React.forwardRef((props, ref) => {
    return (
        <div className="demoPage bg-white" ref={ref}>
            <h1>The Grind</h1>
            <p>{props.children}</p>
            <p>Page number: {props.number}</p>
        </div>
    );
});

const FlipBook = () => {
  return (
    <HTMLFlipBook width={500} height={800}>
            <Page number="1"><img src="/comic/1.png" alt="" width={400}/></Page>
            <Page number="2"><img src="/comic/2.png" alt="" width={400}/></Page>
            <Page number="3"><img src="/comic/3.png" alt="" width={400}/></Page>
            <Page number="4"><img src="/comic/4.png" alt="" width={400}/></Page>
    </HTMLFlipBook>
  )
}

export default FlipBook