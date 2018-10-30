import React from 'react'
import PropTypes from 'prop-types'

import { App } from '@components'
import assets from '@assets'
import screens from '@screens/list'

import CreditCard from './CreditCard'
import PayCreditCard from './CreditCard/Pay'

import Loans from './Loans'
import PayLoan from './Loans/Pay'
import RequestLoan from './Loans/Request'

import FixedTermDeposits from './FixedTermDeposits'
import RequestFixedTermDeposit from './FixedTermDeposits/Request'

class Bank extends React.PureComponent {
  static screenOptions = {
    label: screens.BANK,
    icon: assets.bank,
    modals: [PayCreditCard, PayLoan, RequestLoan, RequestFixedTermDeposit],
  }

  render() {
    const { user } = this.props

    return (
      <App>
        <CreditCard
          balance={user.credit_card.next_closure_balance}
          limit={user.credit_card.limit}
        />

        <Loans items={user.loans} />

        <FixedTermDeposits items={user.certificates_of_deposit} />
      </App>
    )
  }
}

Bank.propTypes = {
  user: PropTypes.object.isRequired,
}

export default Bank
