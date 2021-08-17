import React from "react";
import ContentSlider from "../../components/ComponentSlider/slider";
import { Switch, Route } from "react-router-dom";
import ContentKonstantalar from "../../components/settings/konstantalar/konstantalar";

class ContentSettings extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/Settings">
          <ContentSlider />
        </Route>
        <Route path="/Settings/konstantalar">
            <ContentKonstantalar />
        </Route>
      </Switch>
    );
  }
}
export default ContentSettings;