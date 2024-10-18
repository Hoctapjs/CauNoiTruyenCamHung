const quotes = [
    "Con đường duy nhất để đi đến tương lai là tự mình tạo ra nó.",
    "Cuộc sống là 10% những gì xảy ra và 90% cách chúng ta đối diện với nó.",
    "Thời gian là hữu hạn, đừng lãng phí nó để sống cuộc đời của người khác.",
    "Thành công thường đến với những người quá bận rộn để đi tìm nó.",
    "Đừng ngại từ bỏ những điều tốt để theo đuổi điều tuyệt vời.",
    "Tôi nhận ra rằng, càng chăm chỉ làm việc, tôi càng may mắn.",
    "Cách duy nhất để làm nên điều vĩ đại là yêu thích công việc mình làm.",
    "Hãy sống như thể mỗi ngày là ngày cuối cùng của cuộc đời bạn.",
    "Không có gì là không thể, chỉ cần bạn thực sự muốn và quyết tâm làm.",
    "Hạnh phúc không phải là đích đến mà là hành trình bạn đang đi.",
    "Người thành công không phải là người chưa bao giờ thất bại mà là người không bao giờ bỏ cuộc.",
    "Điều quan trọng không phải bạn đang đi nhanh đến đâu, mà là bạn có đang đi đúng hướng.",
    "Sự thay đổi bắt đầu từ chính bản thân bạn.",
    "Mỗi khi bạn ngã, hãy đứng dậy mạnh mẽ hơn.",
    "Cuộc sống không phải là chờ đợi cơn bão qua đi mà là học cách khiêu vũ dưới mưa.",
    "Những gì bạn nghĩ hôm nay sẽ quyết định tương lai của bạn ngày mai.",
    "Bạn sẽ không bao giờ đi hết con đường nếu bạn không bắt đầu bước đi.",
    "Không bao giờ là quá muộn để bắt đầu lại từ đầu.",
    "Dũng cảm không phải là không sợ hãi, mà là vượt qua nỗi sợ để tiến bước.",
    "Hãy tin vào chính mình, vì chính bạn là người duy nhất biết bạn có thể làm gì.",
    "Không có khó khăn nào là mãi mãi, chỉ có ý chí vững vàng là trường tồn.",
    "Người khôn ngoan là người học hỏi từ thất bại nhiều hơn từ thành công.",
    "Cơ hội không đến hai lần, vì vậy hãy nắm lấy khi nó xuất hiện.",
    "Thất bại chỉ là một bước nhỏ trên hành trình đến thành công.",
    "Sức mạnh lớn nhất của con người chính là sự kiên nhẫn và lòng quyết tâm.",
    "Đôi khi bạn phải tự tạo động lực cho chính mình, đừng chờ đợi người khác làm điều đó.",
    "Không phải ai sinh ra cũng vĩ đại, mà vĩ đại là kết quả của sự nỗ lực không ngừng.",
    "Mỗi ngày là một cơ hội để trở thành phiên bản tốt hơn của chính mình.",
    "Tương lai thuộc về những ai tin vào vẻ đẹp của ước mơ của mình.",
    "Khi bạn muốn từ bỏ, hãy nghĩ đến lý do vì sao bạn bắt đầu.",
    "Một suy nghĩ tích cực vào buổi sáng có thể thay đổi cả ngày của bạn.",
    "Nếu bạn không thay đổi hướng đi, bạn sẽ kết thúc nơi mà bạn đang hướng tới.",
    "Cách nhanh nhất để đạt được một giấc mơ là bắt đầu ngay bây giờ."
];


const quoteText = document.getElementById('quote-text');
const generateBtn = document.getElementById('generate-btn');

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
}

generateBtn.addEventListener('click', generateQuote);