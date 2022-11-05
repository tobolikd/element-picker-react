import styles from './Popup.module.css'

const Popup = () => {
	return (
		<div className={styles.popup}>
			<h1>Smartlook element picker</h1>
			<p>
				Chrome extension to allow users to select an element on any page and returns a selector that can be used
				to target this element.
			</p>
			<p>
				<b>Please note that this code gets executed on EVERY page</b>. If you want to whitelist only some pages
				you can adjust manifest.json file, or you can overwrite it in extension settings:
				<br />
				1. Go to{' '}
				<a className={styles.popupLink} href="chrome://extensions/">
					chrome://extensions/
				</a>{' '}
				<br />
				2. Click on `details` button of this extension <br />
				3. Go to `Site access` sections and adjust it to your needs. <br />
			</p>
		</div>
	)
}

// make root component exported to meet `isReactRefreshBoundary`
// https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/52cd3a7f2e594fce187d3f1e0c32d201da798376/lib/runtime/RefreshUtils.js#L185
export default Popup
