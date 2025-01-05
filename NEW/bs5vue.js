var ShopData = Vue.createApp({
    data() {
        return {
            Shop: [], // 初始化 cards 為空陣列
        };
    },
    mounted() {
        // 使用 jQuery 的 $.ajax 發送請求
        $.ajax({
            url: "/Shop", // API 路徑
            method: "GET",    // HTTP 方法
            dataType: "json", // 資料格式
            success: (results) => {
                this.Shop = results; // 將回傳的資料綁定到 Vue 的 cards
            },
            error: (xhr, status, error) => {
                console.error("Error fetching data:", status, error);
            },
        });
    },
});
// 掛載 Vue 應用程式到指定的 DOM 元素
ShopData.mount("#shop");




var GalleryData = Vue.createApp({
    data() {
        return {
            Gallery: [], // 初始化 cards 為空陣列
        };
    },
    mounted() {
        // 使用 jQuery 的 $.ajax 發送請求
        $.ajax({
            url: "/Gallery", // API 路徑
            method: "GET",    // HTTP 方法
            dataType: "json", // 資料格式
            success: (results) => {
                this.Gallery = results; // 將回傳的資料綁定到 Vue 的 cards
            },
            error: (xhr, status, error) => {
                console.error("Error fetching data:", status, error);
            },
        });
    },
});
// 掛載 Vue 應用程式到指定的 DOM 元素
GalleryData.mount("#gallery");