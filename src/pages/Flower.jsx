import { useEffect, useState } from 'react'

function Flower() {
  const [loaded, setLoaded] = useState(false)
  const [title, setTitle] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const [paragraph1Text, setParagraph1Text] = useState('')
  const [paragraph2Text, setParagraph2Text] = useState('')
  const [paragraph3Text, setParagraph3Text] = useState('')
  const [showParagraph1, setShowParagraph1] = useState(false)
  const [showParagraph2, setShowParagraph2] = useState(false)
  const [showParagraph3, setShowParagraph3] = useState(false)
  const [showImages, setShowImages] = useState(false)

  // Message content
  const paragraph1 = "My dearest Yannie, I wanted to create something beautiful just for you. These flowers represent my feelings for you—pure, beautiful, and growing stronger every day. You mean everything to me, and I wanted to show you in a way that words alone cannot express."
  const paragraph2 = "Every moment with you is precious. These memories we've shared together are treasures I hold close to my heart."
  const paragraph3 = "I know I've made mistakes, and I want you to know how truly sorry I am. I never meant to hurt you or cause you any pain. You deserve all the happiness in the world, and I'm sorry for any pain I've caused. I hope these flowers can convey what my words sometimes fail to express—my deep love and sincere apologies. With all my love, Lee 💕"

  useEffect(() => {
    // Update page title
    document.title = 'FLOWERS'

    // Start animations immediately - don't delay
    setLoaded(true)
    setTitle('')

    // Define typing functions inside useEffect to avoid closure issues
    const startTypingParagraph3 = () => {
      setShowParagraph3(true)
      let index = 0

      function typeChar() {
        if (index < paragraph3.length) {
          setParagraph3Text((prev) => prev + paragraph3[index])
          index++
          setTimeout(typeChar, 30)
        }
      }

      typeChar()
    }

    const startTypingParagraph2 = () => {
      setShowParagraph2(true)
      let index = 0

      function typeChar() {
        if (index < paragraph2.length) {
          setParagraph2Text((prev) => prev + paragraph2[index])
          index++
          setTimeout(typeChar, 30)
        } else {
          // Show images after paragraph 2 finishes
          setTimeout(() => {
            setShowImages(true)
            // Then start paragraph 3
            setTimeout(() => {
              startTypingParagraph3()
            }, 1000)
          }, 1000)
        }
      }

      typeChar()
    }

    const startTypingParagraph1 = () => {
      console.log('startTypingParagraph1 called')
      setShowParagraph1(true)
      let index = 0

      function typeChar() {
        if (index < paragraph1.length) {
          setParagraph1Text((prev) => prev + paragraph1[index])
          index++
          setTimeout(typeChar, 30)
        } else {
          // After paragraph 1 finishes, start paragraph 2
          setTimeout(() => {
            startTypingParagraph2()
          }, 1500)
        }
      }

      typeChar()
    }

    // Start typing animation after delay
    const titleTimer = setTimeout(() => {
      const titles = 'I LOVE YOU, YANNIE'.split('')
      let index = 0

      function appendTitle() {
        if (index < titles.length) {
          setTitle((prev) => prev + titles[index])
          index++
          setTimeout(appendTitle, 300)
        } else {
          // After title finishes, wait a bit then show message
          setTimeout(() => {
            console.log('Starting message typing...')
            setShowMessage(true)
            startTypingParagraph1()
          }, 1000)
        }
      }

      appendTitle()
    }, 1000)

    return () => {
      clearTimeout(titleTimer)
      // Reset title when leaving
      document.title = 'For my lovey'
    }
  }, [paragraph1, paragraph2, paragraph3])

  return (
    <div className="flower-page">
      {/* Background */}
      <div className="night"></div>

      {/* Flower */}
      <div className="flowers">
        {/* Flower 1 */}
        <div className="flower flower--1">
          <div className="flower__leafs flower__leafs--1">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>

            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
            <div className="flower__line__leaf flower__line__leaf--5"></div>
            <div className="flower__line__leaf flower__line__leaf--6"></div>
          </div>
        </div>

        {/* Flower 2 */}
        <div className="flower flower--2">
          <div className="flower__leafs flower__leafs--2">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>

            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        {/* Flower 3 */}
        <div className="flower flower--3">
          <div className="flower__leafs flower__leafs--3">
            <div className="flower__leaf flower__leaf--1"></div>
            <div className="flower__leaf flower__leaf--2"></div>
            <div className="flower__leaf flower__leaf--3"></div>
            <div className="flower__leaf flower__leaf--4"></div>
            <div className="flower__white-circle"></div>

            <div className="flower__light flower__light--1"></div>
            <div className="flower__light flower__light--2"></div>
            <div className="flower__light flower__light--3"></div>
            <div className="flower__light flower__light--4"></div>
            <div className="flower__light flower__light--5"></div>
            <div className="flower__light flower__light--6"></div>
            <div className="flower__light flower__light--7"></div>
            <div className="flower__light flower__light--8"></div>
          </div>
          <div className="flower__line">
            <div className="flower__line__leaf flower__line__leaf--1"></div>
            <div className="flower__line__leaf flower__line__leaf--2"></div>
            <div className="flower__line__leaf flower__line__leaf--3"></div>
            <div className="flower__line__leaf flower__line__leaf--4"></div>
          </div>
        </div>

        {/* Long grass */}
        <div className="grow-ans" style={{ '--d': '1.2s' }}>
          <div className="flower__g-long">
            <div className="flower__g-long__top"></div>
            <div className="flower__g-long__bottom"></div>
          </div>
        </div>

        {/* Growing grass 1 */}
        <div className="growing-grass">
          <div className="flower__grass flower__grass--1">
            <div className="flower__grass--top"></div>
            <div className="flower__grass--bottom"></div>
            <div className="flower__grass__leaf flower__grass__leaf--1"></div>
            <div className="flower__grass__leaf flower__grass__leaf--2"></div>
            <div className="flower__grass__leaf flower__grass__leaf--3"></div>
            <div className="flower__grass__leaf flower__grass__leaf--4"></div>
            <div className="flower__grass__leaf flower__grass__leaf--5"></div>
            <div className="flower__grass__leaf flower__grass__leaf--6"></div>
            <div className="flower__grass__leaf flower__grass__leaf--7"></div>
            <div className="flower__grass__leaf flower__grass__leaf--8"></div>
            <div className="flower__grass__overlay"></div>
          </div>
        </div>

        {/* Growing grass 2 */}
        <div className="growing-grass">
          <div className="flower__grass flower__grass--2">
            <div className="flower__grass--top"></div>
            <div className="flower__grass--bottom"></div>
            <div className="flower__grass__leaf flower__grass__leaf--1"></div>
            <div className="flower__grass__leaf flower__grass__leaf--2"></div>
            <div className="flower__grass__leaf flower__grass__leaf--3"></div>
            <div className="flower__grass__leaf flower__grass__leaf--4"></div>
            <div className="flower__grass__leaf flower__grass__leaf--5"></div>
            <div className="flower__grass__leaf flower__grass__leaf--6"></div>
            <div className="flower__grass__leaf flower__grass__leaf--7"></div>
            <div className="flower__grass__leaf flower__grass__leaf--8"></div>
            <div className="flower__grass__overlay"></div>
          </div>
        </div>

        {/* Right grass 1 */}
        <div className="grow-ans" style={{ '--d': '2.4s' }}>
          <div className="flower__g-right flower__g-right--1">
            <div className="leaf"></div>
          </div>
        </div>

        {/* Right grass 2 */}
        <div className="grow-ans" style={{ '--d': '2.8s' }}>
          <div className="flower__g-right flower__g-right--2">
            <div className="leaf"></div>
          </div>
        </div>

        {/* Front grass */}
        <div className="grow-ans" style={{ '--d': '2.8s' }}>
          <div className="flower__g-front">
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8">
              <div className="flower__g-front__leaf"></div>
            </div>
            <div className="flower__g-front__line"></div>
          </div>
        </div>

        {/* FR grass */}
        <div className="grow-ans" style={{ '--d': '3.2s' }}>
          <div className="flower__g-fr">
            <div className="leaf"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
            <div className="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
          </div>
        </div>

        {/* Long grass groups */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((groupIndex) => {
          const delays = [
            [3, 2.2, 3.4, 3.6],
            [3.6, 3.8, 4, 4.2],
            [4, 4.2, 4.4, 4.6],
            [4, 4.2, 3, 3.6],
            [4, 4.2, 3, 3.6],
            [4, 4.2, 3, 3.6],
            [4.2, 4.4, 4.6, 4.8],
            [3, 3.2, 3.5, 3.6],
          ]

          return (
            <div key={groupIndex} className={`long-g long-g--${groupIndex}`}>
              {[0, 1, 2, 3].map((leafIndex) => (
                <div
                  key={leafIndex}
                  className="grow-ans"
                  style={{ '--d': `${delays[groupIndex][leafIndex]}s` }}
                >
                  <div className={`leaf leaf--${leafIndex}`}></div>
                </div>
              ))}
            </div>
          )
        })}
      </div>

      {/* Title */}
      <h1 className="title">
        <span id="title">{title}</span>
      </h1>

      {/* Heartfelt Message */}
      {showMessage && (
        <div className="flower-message">
          <div className="flower-message-content">
            {/* Debug info */}
            <div style={{ color: 'yellow', fontSize: '10px', marginBottom: '10px' }}>
              Debug: showMessage={showMessage.toString()}, p1={showParagraph1.toString()}, p2={showParagraph2.toString()}, p3={showParagraph3.toString()}
            </div>
            
            {/* First Paragraph - Pure Text */}
            {showParagraph1 && (
              <p className="flower-message-text">
                {paragraph1Text}
                {paragraph1Text.length < paragraph1.length && (
                  <span className="typing-cursor">|</span>
                )}
              </p>
            )}

            {/* Second Paragraph - Text with Images */}
            {showParagraph2 && (
              <div className="flower-message-paragraph">
                <p className="flower-message-text">
                  {paragraph2Text}
                  {paragraph2Text.length < paragraph2.length && (
                    <span className="typing-cursor">|</span>
                  )}
                </p>
                {showImages && (
                  <div className="flower-message-images">
                    <img 
                      src="/images/memory1.jpg" 
                      alt="Memory 1" 
                      className="flower-message-image"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                    <img 
                      src="/images/memory2.jpg" 
                      alt="Memory 2" 
                      className="flower-message-image"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>
                )}
              </div>
            )}

            {/* Third Paragraph - Apology Message */}
            {showParagraph3 && (
              <p className="flower-message-text flower-message-apology">
                {paragraph3Text}
                {paragraph3Text.length < paragraph3.length && (
                  <span className="typing-cursor">|</span>
                )}
              </p>
            )}
            
            {/* Show loading state */}
            {!showParagraph1 && !showParagraph2 && !showParagraph3 && (
              <p style={{ color: 'white', fontSize: '14px' }}>Loading message...</p>
            )}
          </div>
        </div>
      )}
      
      {/* Always show debug info at top */}
      <div style={{ position: 'fixed', top: '10px', right: '10px', background: 'rgba(0,0,0,0.8)', color: 'white', padding: '10px', fontSize: '12px', zIndex: 9999 }}>
        <div>Title: {title}</div>
        <div>Show Message: {showMessage.toString()}</div>
        <div>P1: {showParagraph1.toString()}</div>
        <div>P1 Text Length: {paragraph1Text.length}</div>
      </div>
    </div>
  )
}

export default Flower

