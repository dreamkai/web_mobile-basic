import request from '@/utils/request'

export function login() {
    return request({
      url: '/p/snt/plan/biPartnerAcceptStorage/querAmountByPartner',
      method: 'get',
    })
  }