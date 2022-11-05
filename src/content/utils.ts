// A type guard function to determine whether given object is Element or not
export const isElement = (maybeElement: EventTarget | Node | null): maybeElement is Element =>
	maybeElement !== null && (<Node>maybeElement)?.nodeType === Node.ELEMENT_NODE
