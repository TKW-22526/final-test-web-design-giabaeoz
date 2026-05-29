// Mảng đối tượng quản lý dữ liệu sản phẩm của cửa hàng GB Garden

const products = [
    // ===============================
    // NHÓM SEN ĐÁ
    // ===============================
    {
        id: 1,
        name: "Sen đá kim cương",
        price: 45000,
        category: "Sen đá",
        origin: "Đà Lạt",
        image: "assets/images/sen-da-kim-cuong.jpg",
        description: "Sen đá nhỏ gọn, lá mọng nước, phù hợp trang trí bàn học.",
        detail: "Sen đá kim cương có hình dáng đẹp mắt, các lá xếp đều như một bông hoa nhỏ. Cây thích hợp để trang trí bàn học, bàn làm việc hoặc kệ sách.",
        care: "Đặt cây ở nơi có ánh sáng nhẹ, tưới nước 1-2 lần mỗi tuần, tránh để đất quá ẩm.",
        isBestSeller: true
    },
    {
        id: 2,
        name: "Sen đá phật bà",
        price: 50000,
        category: "Sen đá",
        origin: "Đà Lạt",
        image: "assets/images/sen-da-phat-ba.jpg",
        description: "Sen đá có dáng xòe tròn đẹp mắt, màu sắc nhẹ nhàng.",
        detail: "Sen đá phật bà có các lá xếp thành hình hoa sen, mang vẻ đẹp nhẹ nhàng và thanh thoát. Đây là một trong những loại sen đá được yêu thích để trang trí không gian nhỏ.",
        care: "Cần đất thoát nước tốt, đặt nơi thoáng mát có ánh sáng, tưới khi đất khô.",
        isBestSeller: false
    },
    {
        id: 3,
        name: "Sen đá nâu",
        price: 42000,
        category: "Sen đá",
        origin: "Đà Lạt",
        image: "assets/images/sen-da-nau.jpg",
        description: "Sen đá có màu nâu lạ mắt, tạo điểm nhấn cho góc trang trí.",
        detail: "Sen đá nâu có màu sắc độc đáo, phù hợp với những bạn yêu thích phong cách trầm, tối giản và hiện đại.",
        care: "Đặt cây ở nơi có ánh sáng nhẹ, hạn chế tưới quá nhiều nước.",
        isBestSeller: false
    },
    {
        id: 4,
        name: "Sen đá đô la trắng",
        price: 55000,
        category: "Sen đá",
        origin: "Lâm Đồng",
        image: "assets/images/sen-da-do-la-trang.jpg",
        description: "Sen đá lá tròn nhỏ, màu xanh bạc nhẹ nhàng và dễ thương.",
        detail: "Sen đá đô la trắng có lá nhỏ tròn, mọc thành cụm xinh xắn. Cây thường được dùng để trang trí bàn làm việc hoặc làm quà tặng.",
        care: "Tưới ít nước, đặt cây ở nơi có ánh sáng tự nhiên và tránh mưa trực tiếp.",
        isBestSeller: false
    },
    {
        id: 5,
        name: "Sen đá chuỗi ngọc",
        price: 60000,
        category: "Sen đá",
        origin: "Đà Lạt",
        image: "assets/images/sen-da-chuoi-ngoc.jpg",
        description: "Sen đá dạng dây rủ, các lá tròn nhỏ như chuỗi hạt xanh.",
        detail: "Sen đá chuỗi ngọc có dáng rủ mềm mại, thích hợp trồng trong chậu treo hoặc đặt ở kệ cao để tạo vẻ tự nhiên.",
        care: "Đặt nơi thoáng sáng, tưới ít nước, tránh để cây bị úng.",
        isBestSeller: false
    },
    {
        id: 6,
        name: "Sen đá móng rồng",
        price: 48000,
        category: "Sen đá",
        origin: "Đà Lạt",
        image: "assets/images/sen-da-mong-rong.jpg",
        description: "Sen đá có lá nhọn, vân trắng nổi bật, dáng cây mạnh mẽ.",
        detail: "Sen đá móng rồng có vẻ ngoài cá tính với lá nhọn và các đường vân trắng. Cây phù hợp với những góc trang trí hiện đại.",
        care: "Đặt nơi có ánh sáng nhẹ, tưới khi đất khô hoàn toàn.",
        isBestSeller: false
    },
    {
        id: 7,
        name: "Sen đá hồng phấn",
        price: 52000,
        category: "Sen đá",
        origin: "Đà Lạt",
        image: "assets/images/sen-da-hong-phan.jpg",
        description: "Sen đá có sắc hồng nhẹ, vẻ ngoài mềm mại và nổi bật.",
        detail: "Sen đá hồng phấn có màu sắc dịu nhẹ, thường được chọn làm quà tặng hoặc trang trí bàn học, bàn làm việc.",
        care: "Cần ánh sáng nhẹ để giữ màu đẹp, tưới nước vừa phải và tránh nắng gắt.",
        isBestSeller: false
    },
    {
        id: 8,
        name: "Sen đá ruby",
        price: 58000,
        category: "Sen đá",
        origin: "Lâm Đồng",
        image: "assets/images/sen-da-ruby.jpg",
        description: "Sen đá có màu đỏ tím bắt mắt, thích hợp làm điểm nhấn trang trí.",
        detail: "Sen đá ruby nổi bật với màu sắc ấn tượng, phù hợp với người yêu thích cây cảnh mini có màu lạ và nổi bật.",
        care: "Đặt cây nơi có ánh sáng tốt, tưới nước khi đất khô, không để nước đọng trên lá.",
        isBestSeller: false
    },
    {
        id: 9,
        name: "Sen đá thái",
        price: 47000,
        category: "Sen đá",
        origin: "Đà Lạt",
        image: "assets/images/sen-da-thai.jpg",
        description: "Sen đá dáng nhỏ xinh, dễ trồng, phù hợp với người mới bắt đầu.",
        detail: "Sen đá thái có hình dáng cân đối, dễ chăm sóc và phù hợp để trang trí nhiều không gian khác nhau.",
        care: "Đặt cây ở nơi thông thoáng, có ánh sáng nhẹ, tưới nước 1 lần mỗi tuần.",
        isBestSeller: true
    },
    {
        id: 10,
        name: "Sen đá viền đỏ",
        price: 53000,
        category: "Sen đá",
        origin: "Đà Lạt",
        image: "assets/images/sen-da-vien-do.jpg",
        description: "Sen đá có viền lá màu đỏ nhẹ, dáng cây thanh lịch.",
        detail: "Sen đá viền đỏ có lá xanh kết hợp viền đỏ nổi bật, tạo cảm giác tinh tế và đẹp mắt khi đặt trong chậu nhỏ.",
        care: "Cần ánh sáng tự nhiên nhẹ, tưới ít nước và dùng đất thoát nước tốt.",
        isBestSeller: false
    },
    {
        id: 11,
        name: "Sen đá thơm",
        price: 57000,
        category: "Sen đá",
        origin: "Đà Lạt",
        image: "assets/images/sen-da-thom.jpg",
        description: "Sen đá có dáng nhỏ, màu xanh tươi và hương thơm nhẹ.",
        detail: "Sen đá thơm là loại sen đá nhỏ xinh, phù hợp để trang trí bàn học, bàn làm việc hoặc góc cửa sổ có ánh sáng nhẹ.",
        care: "Đặt cây ở nơi có ánh sáng tự nhiên, tưới ít nước và tránh để cây trong môi trường quá ẩm.",
        isBestSeller: false
    },
    {
        id: 12,
        name: "Sen đá dù",
        price: 49000,
        category: "Sen đá",
        origin: "Lâm Đồng",
        image: "assets/images/sen-da-du.jpg",
        description: "Sen đá có tán lá xòe nhỏ như chiếc dù, dáng cây cân đối.",
        detail: "Sen đá dù có hình dáng lạ mắt, các lá mọc xòe đều, thích hợp dùng làm cây trang trí mini hoặc phối tiểu cảnh.",
        care: "Đặt cây nơi thoáng mát, có ánh sáng nhẹ, tưới nước khi đất khô.",
        isBestSeller: false
    },

    // ===============================
    // NHÓM XƯƠNG RỒNG
    // ===============================
    {
        id: 13,
        name: "Xương rồng tai thỏ",
        price: 39000,
        category: "Xương rồng",
        origin: "Ninh Thuận",
        image: "assets/images/xuong-rong-tai-tho.jpg",
        description: "Xương rồng mini có hình dáng đáng yêu, chịu hạn tốt.",
        detail: "Xương rồng tai thỏ phù hợp với người mới bắt đầu chăm cây vì không cần tưới nước thường xuyên.",
        care: "Đặt cây ở nơi có nắng nhẹ, tưới ít nước và tránh để đất quá ẩm.",
        isBestSeller: true
    },
    {
        id: 14,
        name: "Xương rồng bóng vàng",
        price: 45000,
        category: "Xương rồng",
        origin: "Ninh Thuận",
        image: "assets/images/xuong-rong-bong-vang.jpg",
        description: "Xương rồng dáng tròn, gai vàng đẹp mắt và dễ chăm sóc.",
        detail: "Xương rồng bóng vàng có hình dáng nhỏ gọn, phù hợp để trang trí bàn học hoặc bàn làm việc.",
        care: "Cần nhiều ánh sáng, tưới rất ít nước, tránh đặt nơi ẩm thấp.",
        isBestSeller: false
    },
    {
        id: 15,
        name: "Xương rồng trứng chim",
        price: 43000,
        category: "Xương rồng",
        origin: "Ninh Thuận",
        image: "assets/images/xuong-rong-trung-chim.jpg",
        description: "Xương rồng mini dáng nhỏ tròn, phù hợp trang trí góc học tập.",
        detail: "Xương rồng trứng chim có dáng nhỏ gọn, dễ chăm sóc và thường được chọn để trang trí bàn làm việc hoặc làm quà tặng.",
        care: "Đặt nơi có ánh sáng tốt, tưới rất ít nước, tránh để cây bị úng.",
        isBestSeller: false
    },

    // ===============================
    // NHÓM CÂY ĐỂ BÀN VÀ CÂY PHONG THỦY
    // ===============================
    {
        id: 16,
        name: "Cây kim tiền mini",
        price: 79000,
        category: "Cây phong thủy",
        origin: "Lâm Đồng",
        image: "assets/images/cay-kim-tien-mini.jpg",
        description: "Cây kim tiền mini mang ý nghĩa may mắn và tài lộc.",
        detail: "Cây có dáng đẹp, lá xanh bóng, thường được đặt trên bàn làm việc hoặc góc học tập.",
        care: "Tưới nước vừa phải, tránh ánh nắng trực tiếp quá mạnh.",
        isBestSeller: true
    },
    {
        id: 17,
        name: "Trầu bà mini",
        price: 69000,
        category: "Cây để bàn",
        origin: "Bến Tre",
        image: "assets/images/trau-ba-mini.jpg",
        description: "Cây trầu bà mini giúp tạo cảm giác xanh mát cho không gian.",
        detail: "Trầu bà mini là loại cây dễ sống, có thể đặt ở bàn học, bàn làm việc hoặc kệ sách.",
        care: "Có thể sống trong bóng râm, tưới nước 2-3 lần mỗi tuần.",
        isBestSeller: false
    },
    {
        id: 18,
        name: "Cây lưỡi hổ mini",
        price: 65000,
        category: "Cây để bàn",
        origin: "Việt Nam",
        image: "assets/images/cay-luoi-ho-mini.jpg",
        description: "Cây lưỡi hổ mini có dáng cứng cáp, dễ chăm sóc.",
        detail: "Lưỡi hổ mini thường được dùng để trang trí bàn làm việc và tạo điểm nhấn xanh cho không gian.",
        care: "Không cần tưới nhiều nước, đặt nơi thoáng mát có ánh sáng nhẹ.",
        isBestSeller: false
    },
    {
        id: 19,
        name: "Cây ngọc ngân mini",
        price: 72000,
        category: "Cây để bàn",
        origin: "Việt Nam",
        image: "assets/images/cay-ngoc-ngan-mini.jpg",
        description: "Cây ngọc ngân mini có lá xanh trắng đẹp mắt, phù hợp để bàn.",
        detail: "Cây ngọc ngân mini có màu lá nổi bật, thường được dùng để trang trí bàn làm việc, quầy lễ tân hoặc góc học tập.",
        care: "Đặt nơi có ánh sáng nhẹ, tưới nước vừa phải và tránh nắng gắt.",
        isBestSeller: false
    },

    // ===============================
    // NHÓM PHỤ KIỆN CHĂM CÂY
    // ===============================
    {
        id: 20,
        name: "Chậu gốm mini",
        price: 35000,
        category: "Phụ kiện",
        origin: "Việt Nam",
        image: "assets/images/chau-gom-mini.jpg",
        description: "Chậu gốm nhỏ xinh, phù hợp với sen đá và xương rồng.",
        detail: "Chậu có thiết kế đơn giản, màu sắc nhẹ nhàng, giúp cây cảnh mini trở nên nổi bật hơn.",
        care: "Lau sạch chậu thường xuyên, tránh va đập mạnh.",
        isBestSeller: false
    },
    {
        id: 21,
        name: "Bình tưới cây mini",
        price: 42000,
        category: "Phụ kiện",
        origin: "Việt Nam",
        image: "assets/images/binh-tuoi-cay-mini.jpg",
        description: "Bình tưới nhỏ gọn, tiện lợi khi chăm sóc cây cảnh mini.",
        detail: "Sản phẩm phù hợp để tưới sen đá, xương rồng và các loại cây để bàn.",
        care: "Rửa sạch bình sau khi sử dụng, bảo quản nơi khô ráo.",
        isBestSeller: false
    },
    {
        id: 22,
        name: "Đất trồng sen đá",
        price: 30000,
        category: "Phụ kiện",
        origin: "Việt Nam",
        image: "assets/images/dat-trong-sen-da.jpg",
        description: "Đất trồng tơi xốp, thoát nước tốt, phù hợp cho sen đá.",
        detail: "Đất trồng sen đá được phối trộn để giúp cây thoát nước nhanh, hạn chế úng rễ và hỗ trợ cây phát triển ổn định.",
        care: "Bảo quản đất nơi khô ráo, tránh để đất bị ẩm mốc trước khi sử dụng.",
        isBestSeller: false
    },
    {
        id: 23,
        name: "Sỏi trang trí chậu cây",
        price: 25000,
        category: "Phụ kiện",
        origin: "Việt Nam",
        image: "assets/images/soi-trang-tri-chau-cay.jpg",
        description: "Sỏi màu trang trí giúp chậu cây mini đẹp và sạch hơn.",
        detail: "Sỏi trang trí được rải trên bề mặt chậu cây, giúp chậu cây trông gọn gàng, sạch sẽ và có tính thẩm mỹ cao hơn.",
        care: "Rửa sạch sỏi trước khi sử dụng, thay hoặc vệ sinh định kỳ khi cần.",
        isBestSeller: false
    }
];