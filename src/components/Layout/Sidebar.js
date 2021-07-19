import React from "react";
import styled from "styled-components";

function Sidebar() {
  const SideNav = styled.div`
    height: 650px;
    overflow: hidden;
    position: absolute;
    background: white;
    border-bottom-left-radius: 5px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);

    & a {
      display: block;
      padding: 20px;
      color: #fff;
      position: relative;
      margin-bottom: 1px;
      color: grey;
    }

    & a:hover {
      background: #feeae6;
      color: #fc8371;
    }
  `;

  return (
    <SideNav>
      <div>
        <a href="#">
          <i class="fas fa-utensils fa-lg"></i>
        </a>
      </div>

      <div>
        <a href="#">
          <i class="fas fa-star fa-lg"></i>
        </a>
      </div>

      <div>
        <a href="#">
          <i class="fas fa-cog fa-lg"></i>
        </a>
      </div>
    </SideNav>
  );
}

export default Sidebar;
