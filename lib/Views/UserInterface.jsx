import {
  Nav,
  ExperimentalMenu
} from "terriajs/lib/ReactViews/StandardUserInterface/customizable/Groups";
import MeasureTool from "terriajs/lib/ReactViews/Map/Navigation/MeasureTool";
import PropTypes from "prop-types";
import React from "react";
import SplitPoint from "terriajs/lib/ReactViews/SplitPoint";
import StandardUserInterface from "terriajs/lib/ReactViews/StandardUserInterface/StandardUserInterface.jsx";
import version from "../../version";

import "./global.scss";

function loadAugmentedVirtuality(callback) {
  require.ensure(
    "terriajs/lib/ReactViews/Map/Navigation/AugmentedVirtualityTool",
    () => {
      const AugmentedVirtualityTool = require("terriajs/lib/ReactViews/Map/Navigation/AugmentedVirtualityTool");
      callback(AugmentedVirtualityTool);
    },
    "AugmentedVirtuality"
  );
}

function isBrowserSupportedAV() {
  return /Android|iPhone|iPad/i.test(navigator.userAgent);
}

export default function UserInterface(props) {
  return (
    <StandardUserInterface {...props} version={version}>
      <Nav>
        <MeasureTool terria={props.viewState.terria} key="measure-tool" />
      </Nav>
      <ExperimentalMenu>
        <If condition={isBrowserSupportedAV()}>
          <SplitPoint
            loadComponent={loadAugmentedVirtuality}
            viewState={props.viewState}
            terria={props.viewState.terria}
            experimentalWarning={true}
          />
        </If>
      </ExperimentalMenu>
    </StandardUserInterface>
  );
}

UserInterface.propTypes = {
  terria: PropTypes.object,
  viewState: PropTypes.object
};
