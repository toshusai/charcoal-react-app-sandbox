// https://gfx.hatenablog.com/entry/2019/01/30/170352

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: () => {
    return {
      addEventListener: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      removeEventListener: jest.fn(),
    };
  },
});

function addEventListener(
  this: any,
  eventName: "change",
  listener: (event: MediaQueryListEvent) => void
) {
  this.addListener(listener);
}

function removeEventListener(
  this: any,
  eventName: "change",
  listener: (event: MediaQueryListEvent) => void
) {
  this.removeListener(listener);
}

export function mock() {
  if (
    typeof matchMedia !== "undefined" &&
    !matchMedia("all").addEventListener
  ) {
    const originalMatchMedia = matchMedia;
    window.matchMedia = function matchMedia(
      mediaQuery: string
    ): MediaQueryList {
      const mql = originalMatchMedia(mediaQuery);
      mql.addEventListener = addEventListener as (
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | AddEventListenerOptions
      ) => void;
      mql.removeEventListener = removeEventListener as (
        type: string,
        listener: EventListenerOrEventListenerObject,
        options?: boolean | EventListenerOptions
      ) => void;
      return mql;
    };
  }
}

