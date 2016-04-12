import React from "react";
import { render } from "react-dom";

import Presentation from "./presentation";
import Footer from "./footer";

render(<Presentation/>, document.getElementById("root"));
render(<Footer/>, document.getElementById("footer"));
