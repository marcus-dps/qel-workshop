import { Routes, Route } from "react-router-dom";
import Screen from "./Screen";
import Button from "./Button";
import Input from "./Input";
import "./styles.css";

/* Change debug to `true` to see the invisible Buttons */
export const debug = true;

/* Step 1
<---- UPLOAD YOU OWN IMAGE FILES INTO /public

You can use .jpg, .png, .svg
Try to make all your images roughly the same width, 
i.e. 360 pixels wide for a mobile screen
or 1200 pixels wide for a desktop screen
*/

export default function App() {
  /* Step 2

  For each Screen in your click dummy, create a new
  - Route
    - Screen

  If you want to make the screens interactive, place a Button inside the screen
  – Route
    – Screen
      – Button
      – Button

  The Button "to" parameter links to the Route "path" parameter.
  The Screen "image" parameter should be the file name in the / folder (root)
  */
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Screen image="/installWin.png">
              <Button to="/install-mac" x="260" y="130" w="80" h="32" />
              <Button to="/install-win" x="670" y="430" w="50" h="45" />
              <Button to="/first-steps" x="20" y="170" w="110" h="26" />
            </Screen>
          }
        />
        <Route
          path="/install-win"
          element={
            <Screen image="/installWin_2.png">
              <Button to="/install-mac" x="260" y="110" w="80" h="32" />

              <Button to="/install-linux" x="346" y="110" w="80" h="32" />

              <Button to="/first-steps" x="20" y="160" w="110" h="26" />
            </Screen>
          }
        />
        <Route
          path="/install-mac"
          element={
            <Screen image="/installMac.png">
              <Button to="/install-linux" x="346" y="112" w="80" h="32" />
              <Button to="/install-win" x="169" y="112" w="80" h="32" />
              <Button to="/first-steps" x="20" y="155" w="110" h="26" />
            </Screen>
          }
        />
        <Route
          path="/install-linux"
          element={
            <Screen image="/installLinux.png">
              <Button to="/install-mac" x="258" y="112" w="80" h="32" />
              <Button to="/install-win" x="169" y="112" w="80" h="32" />
              <Button to="/first-steps" x="20" y="155" w="110" h="26" />
            </Screen>
          }
        />
        <Route
          path="/first-steps"
          element={
            <Screen image="/first_steps.png">
              <Button to="/install-win" x="10" y="120" w="130" h="30" />
            </Screen>
          }
        />
      </Routes>
    </div>
  );
}
