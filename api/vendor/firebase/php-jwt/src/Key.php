<?php

namespace Firebase\JWT;

use InvalidArgumentException;
use TypeError;

/**
 * PHP 7.4 兼容版本 - 移除 PHP 8.0 构造函数属性提升和 OpenSSL 类型
 */
class Key
{
    /** @var string|resource */
    private $keyMaterial;

    /** @var string */
    private $algorithm;

    /**
     * @param string|resource $keyMaterial
     * @param string $algorithm
     */
    public function __construct($keyMaterial, string $algorithm)
    {
        if (!\is_string($keyMaterial) && !\is_resource($keyMaterial)) {
            throw new TypeError('Key material must be a string or resource');
        }

        if (empty($keyMaterial)) {
            throw new InvalidArgumentException('Key material must not be empty');
        }

        if (empty($algorithm)) {
            throw new InvalidArgumentException('Algorithm must not be empty');
        }

        $this->keyMaterial = $keyMaterial;
        $this->algorithm   = $algorithm;
    }

    /**
     * Return the algorithm valid for this key
     *
     * @return string
     */
    public function getAlgorithm(): string
    {
        return $this->algorithm;
    }

    /**
     * @return string|resource|OpenSSLAsymmetricKey|OpenSSLCertificate
     */
    public function getKeyMaterial()
    {
        return $this->keyMaterial;
    }
}
