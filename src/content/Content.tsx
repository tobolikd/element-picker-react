import styles from './Content.module.css'

const Content = () => {
	return (
		<div id={'smartlook-element-picker'} className={styles.content}>
			<h3>Current element:</h3>
			<p id={'smartlook-element-info'}>
				No element hovered yet
			</p>
		</div>
	)
}

// make root component exported to meet `isReactRefreshBoundary`
// https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/52cd3a7f2e594fce187d3f1e0c32d201da798376/lib/runtime/RefreshUtils.js#L185
export default Content
