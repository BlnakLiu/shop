import styled from "styled-components";
export const Sub = styled.div`
  position: relative;
  z-index: 20;
  height: 90px;
  .nav-sub-wrapper {
    padding: 31px 0;
    height: 28px;
    position: relative;
  }

  .nav-list {
    float: left;
    height: 28px;
    line-height: 28px;
  }
  .container {
    height: 100%;
    width: 1220px;
    margin: 0 auto;
  }
  .nav-list li {
    position: relative;
    float: left;
    padding-left: 2px;
  }

  .nav-list li:first-child {
    padding-left: 0;
  }

  .nav-list li:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 13px;
    width: 2px;
    height: 2px;
    background: #bdbdbd;
  }

  .nav-list li:first-child:before {
    display: none;
  }

  .nav-list li a {
    display: block;
    padding: 0 20px;
    color: #666;
  }

  .nav-list li:first-child a {
    padding-left: 10px;
  }

  .nav-list li.active a {
    font-weight: 700;
  }

  .nav-list li a:hover {
    color: #6b95ea;
  }
`;
