import React from "react";
import styled from "styled-components";

const Navbar = (props) => {
  const Navigation = styled.div`
    height: 65px;
    ${"" /* position: fixed; */}
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    padding: 10px;
  `;

  const Hamburger = styled.div`
    width: 70px;
    height: 100%;

    & div {
      width: 35px;
      height: 4px;
      background: black;
      margin: 5px 0;
      border-radius: 5px;
    }
  `;

  return (
    <Navigation>
      <Hamburger>
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
      </Hamburger>
      <h2>Food Items</h2>
      <div>
        <form class="d-flex">
          <div class="input-group">
            <input
              onChange={props.handleChange}
              class="form-control "
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={props.searchTerm}
            />
            <div class="input-group-append">
              <button class="btn btn-secondary" type="button">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </Navigation>
  );
};

export default Navbar;
