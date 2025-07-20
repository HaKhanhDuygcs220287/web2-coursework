import axios from 'axios';

const API = 'https://web2-coursework.onrender.com/api'; // ✅ Đã cập nhật URL sản phẩm

export default {
  // Lấy toàn bộ từ vựng
  async getWords() {
    try {
      const response = await axios.get(`${API}/vocab`);
      return response.data;
    } catch (error) {
      console.error('Error fetching words:', error);
      throw error; // Để có thể xử lý ở nơi gọi
    }
  },

  // Lấy từ vựng theo ID
  async getWord(id) {
    try {
      const response = await axios.get(`${API}/vocab/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching word:', error);
      throw error;
    }
  },

  // Thêm từ vựng mới
  async createWord(word) {
    try {
      const response = await axios.post(`${API}/vocab`, word);
      return response.data;
    } catch (error) {
      console.error('Error creating word:', error);
      throw error;
    }
  },

  // Cập nhật từ vựng
  async updateWord(id, word) {
    try {
      const response = await axios.put(`${API}/vocab/${id}`, word);
      return response.data;
    } catch (error) {
      console.error('Error updating word:', error);
      throw error;
    }
  },

  // Xóa từ vựng
  async deleteWord(id) {
    try {
      await axios.delete(`${API}/vocab/${id}`);
    } catch (error) {
      console.error('Error deleting word:', error);
      throw error;
    }
  },

  // Flash message (sử dụng Vue Flash Message)
  flash(message) {
    if (window && window.Vue && window.Vue.prototype.$flashMessage) {
      window.Vue.prototype.$flashMessage.success({ message, time: 3000 });
    } else {
      console.warn('Flash message system is not initialized.');
    }
  }
};
