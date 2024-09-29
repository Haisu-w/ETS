// export default {
// 	data () {
// 		return {
// 			nav: {
//         		backgroundColor: ''
//       		}
// 		}
// 	},
// 	mounted () {
//     	window.addEventListener('scroll', this.handleScroll) // 监听页面滚动
//     },
//     methods: {
// 		// 滚动页面时触发导航变色
// 	    handleScroll () {
// 	        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
// 	        // 设置背景颜色的透明度
// 	        if (scrollTop) {
// 	            this.nav.backgroundColor = '#654ad2' // scrollTop + 多少根据自己的需求设置
// 	      	} else if (scrollTop === 0) {
// 	        	this.nav.backgroundColor = 'transparent' // 设置回到顶部时，背景颜色为透明
// 	      	}
// 	    },
//     	// 滚动之前重置
//     	beforeDestroy () {
//       		window.removeEventListener('scroll', this.handleScroll)
//     	},
// 	}
// }
