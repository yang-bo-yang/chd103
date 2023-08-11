let index = 0

        let imageCount = document.querySelectorAll(
            ".carousel .container img"
        ).length

        const bottom = document.querySelector(".carousel .bottom")
        for (let i = 0; i < imageCount; i++) {
            const indicator = document.createElement("div")
            indicator.classList.add("indicator")
            indicator.onclick = () => setIndex(i)

            bottom.append(indicator)
        }

        setInterval(() => {
            index++
            refresh()
        }, 3000)

        function refresh() {
            if (index < 0) {

                index = imageCount - 1
            } else if (index >= imageCount) {

                index = 0
            }
            let carousel = document.querySelector(".carousel")

            // 注意
            let width = getComputedStyle(carousel).width
            width = Number(width.slice(0, -2))
            console.log(width)

            carousel.querySelector(".container").style.left =
                index * width * -1 + "px"
        }
        let refreshWrapper = (func) => {
            return function (...args) {
                let result = func(...args)
                refresh()
                return result
            }
        }

        let leftshift = refreshWrapper(() => {
            index--
        })
        let rightshift = refreshWrapper(() => {
            index++
        })

        let setIndex = refreshWrapper((idx) => {
            index = idx
        })
        refresh()