import styled from "styled-components";
import { COLORS } from "../../../common-app/styles/constants";

export const DownloadCVButton = styled.a`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: white;
  border: 2px solid white;
  padding: 20px 30px;
  transition: 0.7s;

  &:hover,
  &:focus {
    box-shadow: inset 100% 0 0 0 white;
    color: ${COLORS.primary};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SocialMediaIcon = styled.a`
  font-size: 2em;
  margin-right: 5px;
  cursor: pointer;
  transition: 0.7;

  &:hover {
    transform: scale(1.2);
  }
`;
