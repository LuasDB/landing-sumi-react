#!/bin/bash

# Detectar la IP de Windows desde WSL
WIN_IP=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}')

echo ""
echo "🚀 Iniciando Vite en WSL..."
echo "🌐 Tu IP de red local (desde Windows) es: $WIN_IP"
echo "📱 Puedes acceder desde tu smartphone en: http://$WIN_IP:5173"
echo ""

# Ejecutar Vite escuchando en todas las interfaces
npm run dev -- --host=0.0.0.0
