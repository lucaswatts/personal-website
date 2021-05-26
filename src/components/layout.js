/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Sidebar from "./sidebar";
import "./layout.scss";
import { Location } from '@reach/router';

import Terminal from "./terminal";
import Arrow from '../icons/arrow-up.svg';

class Layout extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      terminalActive: false,
    };
  }

  toggleTerminal = (e) => {
    this.setState({ terminalActive: !this.state.terminalActive });
  }
  
  hideTerminal = () => {
    this.setState({ terminalActive: false });
  }

  render() {
    const { children, data } = this.props;
    return (
      <StaticQuery 
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <div id='app'>
              <Location>
                { locationProps => 
                  <Sidebar 
                    {...locationProps} 
                    siteTitle={data.site.siteMetadata.title} 
                    toggleTerminal={this.toggleTerminal}
                    terminalActive={this.state.terminalActive}
                  /> 
                }
              </Location>
              <main id='main'>{children}</main>
              { this.state.terminalActive &&
                <Terminal 
                  hideTerminal={this.hideTerminal}
                /> 
              }
            </div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
