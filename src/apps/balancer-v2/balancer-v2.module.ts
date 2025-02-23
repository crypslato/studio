import { Register } from '~app-toolkit/decorators';
import { AbstractApp } from '~app/app.dynamic-module';
import { CurveVotingEscrowContractPositionBalanceHelper } from '~apps/curve/helpers/curve.voting-escrow.contract-position-balance-helper';
import { CurveVotingEscrowContractPositionHelper } from '~apps/curve/helpers/curve.voting-escrow.contract-position-helper';

import { ArbitrumBalancerV2BalanceFetcher } from './arbitrum/balancer-v2.balance-fetcher';
import { ArbitrumBalancerV2PoolTokenFetcher } from './arbitrum/balancer-v2.pool.token-fetcher';
import { ArbitrumBalancerV2StakedfContractPositionFetcher } from './arbitrum/balancer-v2.staked.contract-position-fetcher';
import BALANCER_V2_DEFINITION, { BalancerV2AppDefinition } from './balancer-v2.definition';
import { BalancerV2ContractFactory } from './contracts';
import { EthereumBalancerV2BalanceFetcher } from './ethereum/balancer-v2.balance-fetcher';
import { EthereumBalancerV2PoolTokenFetcher } from './ethereum/balancer-v2.pool.token-fetcher';
import { EthereumBalancerV2StakedContractPositionFetcher } from './ethereum/balancer-v2.staked.contract-position-fetcher';
import { EthereumBalancerV2VotingEscrowContractPositionFetcher } from './ethereum/balancer-v2.voting-escrow.contract-position-fetcher';
import { EthereumBalancerV2WrappedAaveTokenFetcher } from './ethereum/balancer-v2.wrapped-aave.token-fetcher';
import { BalancerV2CacheManager } from './helpers/balancer-v2.cache-manager';
import { BalancerV2ClaimableContractPositionBalanceHelper } from './helpers/balancer-v2.claimable.contract-position-balance-helper';
import { BalancerV2EventsPoolTokenDataStrategy } from './helpers/balancer-v2.events.pool-token-address-strategy';
import { BalancerV2GaugeAddressesGetter } from './helpers/balancer-v2.gauge-addresses-getter';
import { BalancerV2PoolTokensHelper } from './helpers/balancer-v2.pool.token-helper';
import { BalancerV2GaugeRewardTokenStrategy } from './helpers/balancer-v2.reward-token-strategy';
import { BalancerV2SpotPriceHelper } from './helpers/balancer-v2.spot-price.helper';
import { BalancerV2TheGraphPoolTokenDataStrategy } from './helpers/balancer-v2.the-graph.pool-token-address-strategy';
import { PolygonBalancerV2BalanceFetcher } from './polygon/balancer-v2.balance-fetcher';
import { PolygonBalancerV2PoolTokenFetcher } from './polygon/balancer-v2.pool.token-fetcher';
import { PolygonBalancerV2StakedfContractPositionFetcher } from './polygon/balancer-v2.staked.contract-position-fetcher';

@Register.AppModule({
  appId: BALANCER_V2_DEFINITION.id,
  providers: [
    BalancerV2AppDefinition,
    BalancerV2ContractFactory,
    // Helpers
    CurveVotingEscrowContractPositionHelper,
    CurveVotingEscrowContractPositionBalanceHelper,
    // Arbitrum
    ArbitrumBalancerV2BalanceFetcher,
    ArbitrumBalancerV2PoolTokenFetcher,
    ArbitrumBalancerV2StakedfContractPositionFetcher,
    // Ethereum
    EthereumBalancerV2BalanceFetcher,
    EthereumBalancerV2PoolTokenFetcher,
    EthereumBalancerV2VotingEscrowContractPositionFetcher,
    EthereumBalancerV2StakedContractPositionFetcher,
    EthereumBalancerV2WrappedAaveTokenFetcher,
    // Polygon
    PolygonBalancerV2BalanceFetcher,
    PolygonBalancerV2PoolTokenFetcher,
    PolygonBalancerV2StakedfContractPositionFetcher,
    // Helpers
    BalancerV2CacheManager,
    BalancerV2PoolTokensHelper,
    BalancerV2SpotPriceHelper,
    BalancerV2TheGraphPoolTokenDataStrategy,
    BalancerV2ClaimableContractPositionBalanceHelper,
    BalancerV2EventsPoolTokenDataStrategy,
    BalancerV2GaugeAddressesGetter,
    BalancerV2GaugeRewardTokenStrategy,
  ],
  exports: [BalancerV2SpotPriceHelper, BalancerV2PoolTokensHelper, BalancerV2ContractFactory, BalancerV2GaugeRewardTokenStrategy],
})
export class BalancerV2AppModule extends AbstractApp() {}
