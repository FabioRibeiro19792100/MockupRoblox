import { useEffect, useRef, useState } from 'react'
import './ElementLabel.css'

function ElementLabel({ elements, containerId, onElementClick }) {
  const labelContainerRef = useRef(null)
  const [labels, setLabels] = useState([])

  useEffect(() => {
    if (!elements || !containerId) return

    const container = document.getElementById(containerId)
    if (!container || !labelContainerRef.current) return

    // Aguardar um pouco para os elementos renderizarem
    const timeout = setTimeout(() => {
      const newLabels = []
      elements.forEach((element) => {
        const el = container.querySelector(element.selector)
        if (el) {
          const rect = el.getBoundingClientRect()
          const containerRect = container.getBoundingClientRect()
          
          // Destacar o elemento se estiver selecionado
          if (element.highlighted) {
            el.style.outline = '3px solid rgb(113, 180, 233)'
            el.style.outlineOffset = '2px'
            el.style.boxShadow = '0 0 0 2px rgba(33, 150, 243, 0.3)'
            el.setAttribute('data-highlighted', 'true')
          } else {
            el.style.outline = ''
            el.style.outlineOffset = ''
            el.style.boxShadow = ''
            el.removeAttribute('data-highlighted')
          }
          
          // Tornar o elemento clicável se houver onElementClick
          if (onElementClick && !el.hasAttribute('data-editable-setup')) {
            el.style.cursor = 'pointer'
            el.setAttribute('data-editable', 'true')
            el.setAttribute('data-editable-setup', 'true')
            el.setAttribute('title', 'Clique para editar este elemento')
            
            // Adicionar listener
            const clickHandler = (e) => {
              e.stopPropagation()
              onElementClick({
                type: element.type,
                selector: element.selector,
                label: element.label,
                containerId: containerId
              })
            }
            
            el.addEventListener('click', clickHandler)
          }
          
          const label = document.createElement('div')
          label.className = `element-label element-label-${element.type} ${element.highlighted ? 'element-label-highlighted' : ''}`
          label.textContent = element.label
          label.style.position = 'absolute'
          label.style.top = `${rect.top - containerRect.top - 20}px`
          label.style.left = `${rect.left - containerRect.left}px`
          label.style.width = `${Math.max(rect.width, 100)}px`
          label.style.zIndex = '1000'
          label.style.cursor = 'pointer'
          label.style.pointerEvents = 'auto'
          label.title = 'Clique para editar este elemento'
          
          // Adicionar evento de clique
          if (onElementClick) {
            label.addEventListener('click', (e) => {
              e.stopPropagation()
              onElementClick({
                type: element.type,
                selector: element.selector,
                label: element.label,
                containerId: containerId
              })
            })
          }
          
          labelContainerRef.current.appendChild(label)
          newLabels.push(label)
        }
      })
      setLabels(newLabels)
    }, 200)

    return () => {
      clearTimeout(timeout)
      if (labelContainerRef.current) {
        labelContainerRef.current.innerHTML = ''
      }
      setLabels([])
    }
  }, [elements, containerId])

  return <div ref={labelContainerRef} className="element-label-container" />
}

export default ElementLabel
