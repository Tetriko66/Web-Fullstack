import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import App from './paginas/App';

// 1. Asigna React al ámbito global para evitar 'React is not defined' en subcomponentes
window.React = React;
globalThis.React = React;

// 2. Configura el entorno de pruebas para act() en React 18/19
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

describe('Suite de Pruebas Unitarias Frontend (Jasmine + Karma)', () => {
  let container = null;
  let root = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    if (root) {
      act(() => {
        root.unmount();
      });
    }
    if (container && container.parentNode) {
      container.parentNode.removeChild(container);
    }
    container = null;
  });

  // 1. Renderizado Básico con Router Context
  it('1. Debe renderizar el componente App sin lanzar errores en el DOM', () => {
    expect(() => {
      act(() => {
        root.render(
          <MemoryRouter>
            <App />
          </MemoryRouter>
        );
      });
    }).not.toThrow();
    expect(container.firstChild).not.toBeNull();
  });

  // 2. Estructura del DOM
  it('2. Debe contener un elemento de navegación principal (<nav>)', () => {
    act(() => {
      root.render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
    });
    const navElement = container.querySelector('nav');
    expect(navElement).not.toBeNull();
  });

  // 3. Verificación de Título o Contenido
  it('3. Debe renderizar contenido de texto en el documento', () => {
    act(() => {
      root.render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
    });
    expect(container.textContent.length).toBeGreaterThan(0);
  });

  // 4. Verificación de Enlaces / Enrutamiento
  it('4. Debe contener al menos un enlace de navegación (<a>)', () => {
    act(() => {
      root.render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
    });
    const links = container.querySelectorAll('a');
    expect(links.length).toBeGreaterThan(0);
  });

  // 5. Verificación de Clases CSS (Bootstrap)
  it('5. Debe aplicar clases de Bootstrap o contenedor al contenedor principal', () => {
    act(() => {
      root.render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
    });
    const elementWithClass = container.querySelector('[class]');
    expect(elementWithClass).not.toBeNull();
  });

  // 6. Prueba del Estado Local
  it('6. Debe inicializar y actualizar un contador al hacer clic en un botón', () => {
    function TestCounter() {
      const [count, setCount] = React.useState(0);
      return (
        <button id="counter-btn" onClick={() => setCount(count + 1)}>
          Clicks: {count}
        </button>
      );
    }

    act(() => {
      root.render(<TestCounter />);
    });

    const button = container.querySelector('#counter-btn');
    expect(button.textContent).toContain('Clicks: 0');

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(button.textContent).toContain('Clicks: 1');
  });

  // 7. Simulación de Interacción del Usuario
  it('7. Debe actualizar el estado cuando el usuario escribe en un campo de texto', () => {
    function TestInput() {
      const [text, setText] = React.useState('');
      return (
        <input
          type="text"
          id="test-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      );
    }

    act(() => {
      root.render(<TestInput />);
    });

    const input = container.querySelector('#test-input');

    act(() => {
      input.value = 'Vicente';
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });

    expect(input.value).toBe('Vicente');
  });

  // 8. Espías y Funciones MOCK
  it('8. Debe llamar a una función callback mock al activar un evento', () => {
    const handleClickMock = jasmine.createSpy('handleClickMock');

    act(() => {
      root.render(
        <button id="mock-btn" onClick={handleClickMock}>
          Enviar
        </button>
      );
    });

    const button = container.querySelector('#mock-btn');

    act(() => {
      button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });

  // 9. Propiedades y Paso de Props
  it('9. Debe renderizar correctamente el valor enviado a través de props', () => {
    function CustomLabel({ title }) {
      return <h2>{title}</h2>;
    }

    act(() => {
      root.render(<CustomLabel title="Proyecto React Karma" />);
    });

    const heading = container.querySelector('h2');
    expect(heading.textContent).toBe('Proyecto React Karma');
  });

  // 10. Prevención de Recarga en Formularios
  it('10. Debe prevenir la recarga de página al enviar el formulario usando preventDefault', () => {
    let preventDefaultCalled = false;

    const handleFormSubmit = (e) => {
      e.preventDefault();
      preventDefaultCalled = true;
    };

    act(() => {
      root.render(
        <form id="test-form" onSubmit={handleFormSubmit}>
          <button type="submit">Guardar</button>
        </form>
      );
    });

    const form = container.querySelector('#test-form');
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
    spyOn(submitEvent, 'preventDefault').and.callThrough();

    act(() => {
      form.dispatchEvent(submitEvent);
    });

    expect(preventDefaultCalled).toBeTrue();
    expect(submitEvent.preventDefault).toHaveBeenCalled();
  });
});