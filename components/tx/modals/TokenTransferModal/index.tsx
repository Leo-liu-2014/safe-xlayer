import React from 'react'

import { TxStepperProps } from '@/components/tx/TxStepper'
import SendAssetsForm, { SendAssetsFormData } from '@/components/tx/steps/SendAssetsForm'
import ReviewNewTx from '@/components/tx/steps/ReviewNewTx'
import TxModal, { TxModalProps } from '@/components/tx/TxModal'

export const TokenTransferSteps: TxStepperProps['steps'] = [
  {
    label: 'Create transaction',
    render: (data, onSubmit) => <SendAssetsForm onSubmit={onSubmit} formData={data as SendAssetsFormData} />,
  },
  {
    label: 'Review',
    render: (data) => <ReviewNewTx params={data as SendAssetsFormData} />,
  },
]

const TokenTransferModal = (props: Omit<TxModalProps, 'steps'>) => {
  return <TxModal {...props} steps={TokenTransferSteps} />
}

export default TokenTransferModal
