import React from 'react';
import { HeadsetMicOutlined, LocalShippingOutlined, LockOutlined, RefreshOutlined } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 60px 0px;
`;

const Icon = styled.div`
   display: flex;
   flex-direction: row;
   margin: 0px 30px;
`;

const Showdet = styled.div`
    display: flex;
    flex-direction: column;
    margin: 7px 0px 0px 10px;
`;

const H3 = styled.div`
   font-size: 22px;
   color: #1d1d1d;
   font-weight: bold;
   letter-spacing: 1px;
   margin-bottom: 5px;
`;

const P = styled.div`
   font-size: 14px;
   color: #3c3c3c;
`;

const Icons = () => {
  return (
    <div>
        <Container>
            <Icon>
                <LocalShippingOutlined style={{fontSize: "56px", color: "#6383f6" }}/>
                <Showdet>
                    <H3>Free Shipping</H3>
                    <P>Order Over $100</P>
                </Showdet>
            </Icon>
            <Icon>
                <LockOutlined style={{fontSize: "56px", color: "#6383f6" }}/>
                <Showdet>
                    <H3>Secure Payment</H3>
                    <P>100 Secure Payment</P>
                </Showdet>
            </Icon>
            <Icon>
                <RefreshOutlined style={{fontSize: "56px", color: "#6383f6" }}/>
                <Showdet>
                    <H3>Easy Returns</H3>
                    <P>10 Days Returns</P>
                </Showdet>
            </Icon>
            <Icon>
                <HeadsetMicOutlined style={{fontSize: "56px", color: "#6383f6" }}/>
                <Showdet>
                    <H3>24/7 Support</H3>
                    <P>Call Us Anytime</P>
                </Showdet>
            </Icon>
        </Container>
    </div>
  )
}

export default Icons
