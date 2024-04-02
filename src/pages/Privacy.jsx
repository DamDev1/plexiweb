import React from 'react'
import PrivacyWrapper from '../assets/Wrapper/Privacy'
import ScrollTop from '../Components/ScrollTop'

export default function Privacy() {
    return (
        <PrivacyWrapper>
            <ScrollTop/>
            <div className="privacyHeading">
                <h1>Privacy Policy</h1>
            </div>

            <div className="privacy-container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita velit inventore atque quos incidunt? Eligendi natus sunt autem? Impedit sunt cum corrupti ipsa incidunt tempore soluta numquam modi ratione vero?</p>

                <p style={{ marginTop: 20 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iusto sit eum non minus cum ut aliquam expedita quod hic amet dolore, architecto repellat quos reprehenderit minima autem magni cupiditate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iste suscipit fugiat accusamus earum dicta ab eligendi officia ut repellendus similique facilis, est maxime aut inventore perferendis dolorem quisquam quos.</p>

                <div className="privacy-content">
                    <div className="content-one">
                        <h3>What Does this policy cover</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa eum ducimus, veritatis voluptates quidem ab maiores debitis earum, harum nostrum ad temporibus quis mollitia? Non et temporibus ut explicabo.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rerum minus nesciunt quas, ullam sed deserunt sunt repellendus eius iusto placeat? Animi repellat quia excepturi quas error assumenda sed est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis soluta perferendis eligendi natus tempora, numquam sunt dignissimos quaerat. Quo, expedita saepe. Dignissimos mollitia tempora itaque natus nobis ipsam, officiis cumque!</p>
                    </div>

                    <div className="content-one">
                        <h3>Information we collect and its use</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa eum ducimus, veritatis voluptates quidem ab maiores debitis earum, harum nostrum ad temporibus quis mollitia? Non et temporibus ut explicabo.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit rerum minus nesciunt quas, ullam sed deserunt sunt repellendus eius iusto placeat? Animi repellat quia excepturi quas error assumenda sed est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis soluta perferendis eligendi natus tempora, numquam sunt dignissimos quaerat. Quo, expedita saepe. Dignissimos mollitia tempora itaque natus nobis ipsam, officiis cumque!</p>
                    </div>
                </div>
            </div>
        </PrivacyWrapper>
    )
}
