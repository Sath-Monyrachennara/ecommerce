import React from 'react';
import { Star } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 50px 0px;
`;

const H2 = styled.div`
    font-size: 28px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 2px;
    color: #1d1d1d;

`;

const showImg = styled.div`
    
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 30px 0px;
`;

const Column = styled.div`
    width: auto;
    text-align: center;
    margin: 0px 10px;
`;

const Image = styled.div`
`;

const P = styled.div`
    font-size: 17px;
    color: #161616;
    margin: 3px 0px 0px;
`;

const Price = styled.div`
    color: #454545;
    margin: 5px 0px;
`;

const Showstar = styled.div`
    color: #7391fe;
`;

const Newpro = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 70px 0px;
`;

const Comimage = styled.div`
`;

const Showdet = styled.div`
    width: 35%;
    height: auto;
    margin-left: 30px;
`;

const H3 = styled.div`
    font-size: 24px;
    color: #1d1d1d;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
`;

const Small = styled.div`
    font-size: 14px;
    color: #6c6b6b;
    text-transform: lowercase;
    margin-bottom: 20px;
`;

const Paragraph = styled.div`
    width: auto;
    height: auto;
    font-size: 17px;
    color: #161616;
    margin-bottom: 20px;
`;

const Buttondis = styled.div`
    font-size: 16px;
    padding: 10px 30px;
    margin-top: 40px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
    width: 145px;
    border-radius: 3px;
    background-color: #fe899c;
    color: #fff;
`;

const Featuerpro = () => {
  return (
    <div>
        <Container>
        <H2>Featured Products</H2>
        <showImg>
            <Row>
                <Column>
                    <Image>
                        <img src={require('../img/homeImg/img6.webp')} alt="" style={{width: "280px", height: "310px"}} />
                    </Image>
                    <P>Bakuchiol Retinol Alternative</P>
                    <Price>$45.00</Price>
                    <Showstar>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </Showstar>
                </Column>
                <Column>
                    <Image>
                        <img src={require('../img/homeImg/img7.webp')} alt="" style={{width: "280px", height: "310px"}} />
                    </Image>
                    <P>Peptides Retinol Alternative Serum</P>
                    <Price>$60.00</Price>
                    <Showstar>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </Showstar>
                </Column>
                <Column>
                    <Image>
                        <img src={require('../img/homeImg/img10.webp')} alt="" style={{width: "280px", height: "310px"}} />
                    </Image>
                    <P>Retinol Alternative Firming Eye Cream</P>
                    <Price>$125.00</Price>
                    <Showstar>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </Showstar>
                </Column>
                <Column>
                    <Image>
                        <img src={require('../img/homeImg/img13.webp')} alt="" style={{width: "280px", height: "310px"}} />
                    </Image>
                    <P>Emerald Deep Moisture Glow Oil</P>
                    <Price>$50.00</Price>
                    <Showstar>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </Showstar>
                </Column>             
                
            </Row>

            <Row>
                <Column>
                    <Image>
                        <img src={require('../img/homeImg/img11.webp')} alt="" style={{width: "280px", height: "310px"}} />
                    </Image>
                    <P>Pink Cloud Rosewater</P>
                    <Price>$86.00</Price>
                    <Showstar>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </Showstar>
                </Column>
                <Column>
                    <Image>
                        <img src={require('../img/homeImg/img12.webp')} alt="" style={{width: "280px", height: "310px"}} />
                    </Image>
                    <P>Lapis Blue Tansy Face Oil - For Oily</P>
                    <Price>$74.00</Price>
                    <Showstar>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </Showstar>
                </Column>
                <Column>
                    <Image>
                        <img src={require('../img/homeImg/img14.webp')} alt="" style={{width: "280px", height: "310px"}} />
                    </Image>
                    <P>Pores Resurfacing Clarity Mask</P>
                    <Price>$115.40</Price>
                    <Showstar>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </Showstar>
                </Column>
                <Column>
                    <Image>
                        <img src={require('../img/homeImg/img15.webp')} alt="" style={{width: "280px", height: "310px"}} />
                    </Image>
                    <P>Pink Cloud Soft Moisture Cream</P>
                    <Price>$85.00</Price>
                    <Showstar>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </Showstar>
                </Column>
            </Row>
        </showImg>

        <Newpro>
            <Comimage>
                <img src={require('../img/homeImg/img16.webp')} alt=""  style={{width: "450px" , height: "500px"}}/>
            </Comimage>
            <Showdet>
                <H3>Rose Hibiscus Hydrating Face Mist</H3>
                <Small>Coming Soon</Small>
                <Paragraph>
                    The addition of naturally-derived, moisture-binding Hyaluronic 
                    Acid to a base of Organic Rosewater, Coconut Water, and Hibiscus Extract instantly hydrates and softens skin. The new super-fine mist is perfect to spritz on clean skin or over makeup, keeping skin dewy and fresh throughout the day.
                </Paragraph>
                <Paragraph>
                    Unfortunately pumps cannot be recycled at this time due to their many mixed parts. That's why Herbivore is moving to pumps that contain post-consumer recycled materials. Please dispose of them properly.  
                </Paragraph>
                <Paragraph>
                    Truly Natural. Vegan. Cruelty-Free. Herbivore products are truly natural, vegan, and cruelty-free. They contain no synthetic ingredients – this includes no dyes, no fragrances, and no synthetic preservatives.
                </Paragraph>
                <Buttondis>Discover</Buttondis>
            </Showdet>
        </Newpro>
    </Container>
    </div>
  )
}

export default Featuerpro
