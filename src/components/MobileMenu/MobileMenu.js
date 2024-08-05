/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { COLORS } from "../../constants.js";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen}>
      <Content>
        <ButtonWrapper>
          <UnstyledButton onClick={onDismiss}>
            <Icon id="close" size={24}>
              {" "}
            </Icon>
          </UnstyledButton>
          <VisuallyHidden>Dismiss modal</VisuallyHidden>
        </ButtonWrapper>
        <Categories>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Categories>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  background-color: hsla(220, 5%, 40%, 0.8);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Content = styled(DialogContent)`
  background-color: ${COLORS.white};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 75px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 26px;
  margin-right: 16px;
`;

const Categories = styled.nav`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  gap: 22px;
  & a {
    text-decoration: none;
    font-family: "Raleway";
    font-size: calc((18 / 16) * 1rem);
    color: var(--color-gray-900);
    text-transform: uppercase;
    font-weight: 600;
  }

  & a:hover {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-left: 32px;
  margin-bottom: 32px;
  gap: 14px;

  & a {
    text-decoration: none;
    font-family: "Raleway";
    color: var(--color-gray-700);
    font-weight: 500;
    font-size: calc((14 / 16) * 1rem);
  }
`;

export default MobileMenu;
