import React from 'react';
import Badge from './../components/atoms/Badge/Bagde';
import Link from './../components/atoms/Link/Link';
import Heading from './../components/atoms/Heading/Heading';

const Homepage = () => {
  return (
    <>
      <div className="app--wrapper">
        <Badge color="primary" label="Some" />
        <Badge color="secondary" label="Some" />
        <Badge color="success" label="Some" />
        <Badge color="danger" label="Some" />
        <br />
        <br />
        <Badge color="primary" label="Some" size="small" />
        <Badge color="secondary" label="Some" size="small" />
        <Badge color="success" label="Some" size="small" />
        <Badge color="danger" label="Some" size="small" />
        <br />
        <br />
        <Badge color="primary" label="Some" size="big" />
        <Badge color="secondary" label="Some" size="big" />
        <Badge color="success" label="Some" size="big" />
        <Badge color="danger" label="Some" size="big" />
        <br />
        <br />
        <Badge color="primary" label="S" size="big" shape="circle" />
        <Badge color="secondary" label="S" size="big" shape="circle" />
        <Badge color="success" label="M" size="big" shape="circle" />
        <Badge color="danger" label="O" size="big" shape="circle" />
        <br />
        <br />
        <Link color="primary" label="Link" href="#">
          Linl
        </Link>
        <Link color="secondary" label="Link" href="#">
          Linl
        </Link>
        <Link color="success" label="Link" href="#">
          Linl
        </Link>
        <Link color="danger" label="Link" href="#">
          Linl
        </Link>
        <br />
        <br />
        <Heading Tag="h1" label="h1 Heading" />
        <Heading Tag="h2" label="h2 Heading" />
        <Heading Tag="h3" label="h3 Heading" />
        <Heading Tag="h4" label="h4 Heading" />
        <Heading Tag="h5" label="h5 Heading" />
        <Heading Tag="h6" label="h6 Heading" />
      </div>
      <div className="app--wrapper">
        <Heading Tag="h3" label="Jakiś tytuł" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum
          lectus mauris ultrices eros in cursus turpis massa tincidunt. Semper
          eget duis at tellus at urna condimentum mattis. Nullam non nisi est
          sit amet facilisis magna etiam. Mauris a diam maecenas sed enim ut
          sem. Consectetur purus ut faucibus pulvinar elementum integer enim
          neque volutpat. Mattis molestie a iaculis at erat pellentesque
          adipiscing commodo. Congue quisque egestas diam in arcu cursus
          euismod. Pretium viverra suspendisse potenti nullam ac tortor. In ante
          metus dictum at tempor commodo ullamcorper a lacus.
        </p>
      </div>
    </>
  );
};

export default Homepage;
