import React, { Component } from 'react'

import styles from './$product.less'
import { InputNumber, Button, Divider } from 'antd';

export default class ProductDetail extends Component {

    constructor() {
        super();


    }


    render() {

        return <div className={styles.product}>
            <div className={styles.info}>
                <h1>华夏财富宝</h1>
                <div className={styles.row}>
                    <span className={styles.key}>
                        万份收益
                    </span>
                    <span className={styles.value}>
                        2%
                    </span>
                </div>
                <div className={styles.row}>
                    <span className={styles.key}>
                        七日年化
                    </span>
                    <span className={styles.value}>
                        2%
                    </span>
                </div>
                <div className={styles.row}>
                    <span className={styles.key}>
                        理财期限
                    </span>
                    <span className={styles.value}>
                        随买随取
                    </span>
                </div>
                <div className={styles.row}>
                    <span className={styles.key}>
                        起购金额
                    </span>
                    <span className={styles.value}>
                        0.01元
                    </span>
                </div>
                <Divider />
                <div className={styles.row}>
                    <span className={styles.key}>
                        买入金额
                    </span>
                    <span className={styles.value}>
                        <InputNumber
                            size="small"
                            min={0}
                            defaultValue={0.0}
                        />
                        &nbsp;元
                    </span>
                </div>
                <div className={styles.row}>
                    <Button
                        type="primary"
                    >买入</Button>
                </div>
            </div>
            <div className={styles.graph}>


            </div>
        </div>
    }
}
