import { Button, Modal } from "@charcoal-ui/react";
import { light } from "@charcoal-ui/theme";
import { ThemeProvider } from "styled-components";
import { TokenInjector } from "@charcoal-ui/styled";
import { OverlayProvider } from "@react-aria/overlays";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ThemeProvider theme={light}>
        <TokenInjector
          theme={{
            ":root": light,
          }}
        />
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <OverlayProvider>
          <Modal
            title="hoge"
            onClose={() => setIsOpen(false)}
            isOpen={isOpen}
            isDismissable={true}
          >
            <h1 style={{ textAlign: "center" }}>Hello</h1>
          </Modal>
        </OverlayProvider>
      </ThemeProvider>
    </>
  );
}
