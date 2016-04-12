// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

import CodeSlide from "spectacle-code-slide";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  config: require("../assets/config.png")
};

preloader(images);

const theme = createTheme({
  primary: "#004353",
  secondary: "#fff",
  tertiary: "#729e51"
});

const aStyle = {
    color: "#729e51"
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide", "fade"]} transitionDuration={500}>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={2} fit lineHeight={1} textColor="secondary">
              Vim dans mon IDE
            </Heading>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={1} lineHeight={1} textColor="secondary">
              Moi
            </Heading>
            <Appear fid="1">
                <Heading size={4} textColor="secondary">
                  Matthieu Bollot -> @mattboll
                </Heading>
            </Appear>
            <Appear fid="2">
                <Heading size={4} textColor="secondary">
                  Code-Troopers -> @codetroopers
                </Heading>
            </Appear>
            <Appear fid="3">
                <Heading size={5} textColor="tertiary">
                  (Navig'Tours, Aucard de Tours…)
                </Heading>
            </Appear>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={1} fit caps>
              Quel est le meilleur acteur, de ses 30 dernières années au cinéma ?
            </Heading>
            <Appear fid="1">
                <Heading size={1} fit caps textColor="secondary">
                  C'est Will Smith !
                </Heading>
            </Appear>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={1} fit caps>
              Quel est le meilleur IDE, de ses 30 dernières années en JAVA ?
            </Heading>
            <Appear fid="1">
                <Heading size={1} fit caps textColor="secondary">
                  C'est IntelliJ IDEA !
                </Heading>
            </Appear>
          </Slide>

          <Slide bgColor="primary">
            <Heading size={1} fit caps>
              Quel est le meilleur éditeur de texte, de ses 30 dernières années ?
            </Heading>
            <Appear fid="1">
                <Heading size={1} fit caps textColor="secondary">
                  C'est Vim !
                </Heading>
            </Appear>
                <List>
                  <Appear><ListItem>Présent partout</ListItem></Appear>
                  <Appear><ListItem>Vous le connaissez (peut-être) déjà</ListItem></Appear>
                  <Appear><ListItem>Pratique sans souris</ListItem></Appear>
                  <Appear><ListItem>Pour les flemmards</ListItem></Appear>
                  <Appear><ListItem>C'est fun</ListItem></Appear>
                </List>
          </Slide>

          <Slide>
            <Heading size={1} caps textColor="secondary">
                3 modes
            </Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="tertiary" margin={10}>
                  Insertion
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="tertiary" margin={10}>
                  Normal
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="tertiary" margin={10}>
                  Visuel
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide>
            <Heading size={4} caps textColor="secondary">
                Insertion (mode TextArea)
            </Heading>
            <List>
              <Appear><ListItem>i, Esc</ListItem></Appear>
              <Appear><ListItem>I, a, A, o, O</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading size={4} caps textColor="secondary">
                Normal (déplacements)
            </Heading>
            <List>
              <Appear>
                <ListItem>hjkl -> flèches gauche, bas, haut, droit</ListItem>
              </Appear>
              <Appear>
                <ListItem>w, e, b -> ctrl + flèches</ListItem>
              </Appear>
              <Appear>
                <ListItem>^, $ -> début/fin </ListItem>
              </Appear>
              <Appear>
                <ListItem>gg, G -> ctrl début/fin</ListItem>
              </Appear>
              <Appear>
                <ListItem>: -> ctrl g</ListItem>
              </Appear>
              <Appear>
                <ListItem>%</ListItem>
              </Appear>
              <Appear>
                <ListItem>[nombre]touche (ex: 5k, 3w) </ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide>
            <Heading size={4} caps textColor="secondary">
                Visuel (sélection)
            </Heading>
            <List>
              <Appear><ListItem>v</ListItem></Appear>
              <Appear><ListItem>V</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading size={4} caps textColor="secondary">
                Quitter Vim (pas indispensable dans IntelliJ)
            </Heading>
            <List>
              <Appear><ListItem>:w</ListItem></Appear>
              <Appear><ListItem>:q</ListItem></Appear>
              <Appear><ListItem>:x</ListItem></Appear>
              <Appear><ListItem>:q!</ListItem></Appear>
              <Appear><ListItem>:w !sudo tee %</ListItem></Appear>
            </List>
          </Slide>

          <Slide>
            <Heading size={4} caps textColor="secondary">
                Normal (commandes)
            </Heading>
            <List>
              <Appear><ListItem>dd -> ctrl-y</ListItem></Appear>
              <Appear><ListItem>yy</ListItem></Appear>
              <Appear><ListItem>p -> ctrl-v</ListItem></Appear>
              <Appear><ListItem>u -> ctrl-z</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
            <Heading size={4} caps textColor="secondary">
                Normal (commandes)
            </Heading>
            <List>
              <Appear><ListItem>commande[nombre]mouvement</ListItem></Appear>
              <Appear><ListItem>cw -> ctrl-shift-flèche droite</ListItem></Appear>
              <Appear><ListItem>y5b</ListItem></Appear>
              <Appear><ListItem>d$</ListItem></Appear>
              <Appear><ListItem>ci" -> ctrl-w-w-w-w</ListItem></Appear>
              <Appear><ListItem>.</ListItem></Appear>
            </List>
          </Slide>

          <CodeSlide
              bgColor="primary"
			  transition={["slide", "fade"]}
			  lang="html"
			  code={require("raw!../assets/vimrc")}
			  ranges={[
				{ loc: [11, 12],
                  title: "~/.ideavimrc",
				  note: "Remplacer la touche Esc par ii"},
				{ loc: [69, 73], note: "Utiliser les touches hjkl en mode insertion avec ctrl"}
			  ]}
          />
          <Slide>
            <Heading size={4} caps textColor="secondary">
                Configuration dans IntelliJ
            </Heading>
            <Image width="100%" src={images.config}/>
          </Slide>
          <Slide>
              <Heading size={4} textColor="secondary">
                Récapitulatif
              </Heading>
              <List>
                  <Appear><ListItem>i pour insérer</ListItem></Appear>
                  <Appear><ListItem>échap pour quitter le mode insertion</ListItem></Appear>
                  <Appear><ListItem>hjkl pour se déplacer</ListItem></Appear>
                  <Appear><ListItem>:x pour quitter</ListItem></Appear>
                  <Appear><ListItem><a style={aStyle} href="http://vim-adventures.com/">vim-adventures.com</a> pour apprendre à se déplacer en jouant</ListItem></Appear>
                  <Appear><ListItem><a style={aStyle} href="http://vim.rtorr.com/">vim.rtorr.com</a> pour une cheat sheet</ListItem></Appear>
              </List>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
