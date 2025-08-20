import React from 'react'
import SplitText from "../animeComponenets/SplitText";
import "./Home.css"
import { useNavigate } from 'react-router-dom'
import ClickSpark from '../animeComponenets/ClickSpark';
import AnimatedContent from '../animeComponenets/AnimatedContent ';
function Home() {
  const navigate = useNavigate()
  return (
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className='homeWrapper'>
        <SplitText
          text="Hello, Dear!"
          className="Hello"
          delay={200}
          duration={0.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <div className='options'>
        <div className="box">
          <AnimatedContent
            className='content'
            distance={150}
            direction="horizontal"
            reverse={true}
            duration={2}
            ease="bounce.out"
            initialOpacity={0.1}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.1}
          >
            <button 
              onClick={() =>
                (navigate('/users', { state: { fromHome: true } }))}>
              open users
            </button>
          </AnimatedContent>
          </div>
          <div className="box">
            <AnimatedContent
            className='content'
            distance={150}
            direction="horizontal"
            reverse={false}
            duration={2}
            ease="bounce.out"
            initialOpacity={0.1}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.1}
          >
          <button 
              onClick={() =>
                (navigate('/products', { state: { fromHome: true } }))}>
              open products
            </button>
            </AnimatedContent>
            </div>
        </div>
      </div>

    </ClickSpark>
  )
}

export default Home