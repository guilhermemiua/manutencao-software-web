import { getToken } from '../../helpers/localStorage'

import api from '../../config/api'

const deleteOrder = async ({ id }: { id: number }) => {
  const token = getToken()

  return api.delete(`/orders/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

const updateOrderStatus = async ({ id, status, user_id }: { id: number, status: 'cancelled' | 'confirmed', user_id: number }) => {
  const token = getToken()

  return api.put(`/orders/${id}/status`, {
    status,
    user_id
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

const getOwnOrders = async ({}: {}) => {
  const token = getToken()

  return api.get('/me/orders', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export {
  getOwnOrders,
  deleteOrder,
  updateOrderStatus
}
