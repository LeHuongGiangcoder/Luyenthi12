export interface Question {
  id: number;
  type: 'multiple-choice' | 'true-false' | 'short-answer';
  content: string;
  image?: string;
  options?: string[]; // For multiple-choice
  subQuestions?: { id: string, content: string }[]; // For true-false
  correctAnswer?: any;
  explanation?: string;
}

export const mockQuestions: Question[] = [
  {
    id: 1,
    type: 'multiple-choice',
    content: 'Cho hình chóp S.ABC có SA vuông góc với mặt phẳng (ABC), SA=a√2, AB=a√2. Góc giữa đường thẳng SB và mặt phẳng (ABC) bằng:',
    options: ['45°', '30°', '90°', '60°'],
    correctAnswer: 0,
    explanation: 'Ta có (SB, (ABC)) = ∠SBA. Do SA ⊥ (ABC) nên SA ⊥ AB. Tam giác SAB vuông cân tại A (SA = AB = a√2) nên ∠SBA = 45°.'
  },
  {
    id: 2,
    type: 'true-false',
    content: 'Một hộp chứa các viên bi có kích thước và khối lượng như nhau gồm 5 viên bi trắng, 6 viên bi đỏ và 8 viên bi xanh. Lấy ngẫu nhiên đồng thời 5 viên bi từ hộp, trong đó có x viên bi trắng, y viên bi đỏ và z viên bi xanh.',
    subQuestions: [
      { id: 'a', content: 'Số phần tử của không gian mẫu là n(Ω) = C^5_19.' },
      { id: 'b', content: 'Xác suất lấy được 5 viên bi đều màu xanh là 1/2907.' },
      { id: 'c', content: 'Xác suất lấy được 5 viên bi ít nhất một viên bi màu xanh nhỏ hơn 0,94.' },
      { id: 'd', content: 'Xác suất lấy được 5 viên bi có ba màu, đồng thời ba số x, y, z theo thứ tự lập thành cấp số cộng bằng 215/969.' }
    ],
    correctAnswer: { a: true, b: false, c: true, d: false }
  },
  {
    id: 3,
    type: 'short-answer',
    content: 'Một khu chung cư có 120 căn hộ cho thuê. Người quản lí của khu chung cư nhận thấy rằng nếu giá thuê một căn hộ là 7 triệu đồng một tháng thì tất cả các căn hộ đều sẽ có người thuê. Một cuộc khảo sát thị trường cho thấy, trung bình cứ mỗi lần tăng giá thuê một căn hộ mỗi tháng thêm 250 nghìn đồng thì sẽ có thêm ba căn hộ bị bỏ trống. Người quản lí nên đặt giá thuê mỗi căn hộ là bao nhiêu triệu đồng một tháng để doanh thu một tháng là lớn nhất?',
    correctAnswer: 8.5
  }
];
